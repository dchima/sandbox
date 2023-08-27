package main

import (
	configs "go-api/src/configs"
	routes "go-api/src/routes"

	"github.com/gofiber/fiber/v2"
)

func main() {
	configs.LoadEnvironmentVariables()
	configs.SetupDatabase()

	app := fiber.New()
	routes.UserRoute(app)

	app.Listen(":6000")
}
