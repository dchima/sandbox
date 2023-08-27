package controllers

import (
	"go-api/src/configs"
	"go-api/src/models"
	"log"

	"github.com/gofiber/fiber/v2"
)

func CreateUser(c *fiber.Ctx) error {
	user := new(models.User)

	if err := c.BodyParser(user); err != nil {
		return c.Status(400).JSON(fiber.Map{
			"status":  "error",
			"message": "Cannot parse JSON",
		})
	}

	configs.Db.Create(&user)
	return c.Status(200).JSON(user)
}

func GetAllUser(c *fiber.Ctx) error {
	var users []models.User
	configs.Db.Find(&users)

	log.Printf("result is: %+v", users)
	return c.Status(200).JSON(users)
}
