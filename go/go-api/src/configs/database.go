package configs

import (
	"fmt"
	"go-api/src/models"
	"log"
	"os"

	"gorm.io/driver/sqlserver"
	"gorm.io/gorm"
)

var Db *gorm.DB

func SetupDatabase() {

	username := os.Getenv("DB_USERNAME")
	password := os.Getenv("DB_PASSWORD")
	host := os.Getenv("DB_HOST")
	port := os.Getenv("DB_PORT")
	database := os.Getenv("DB_DATABASE")

	var DATABASE_URI string = fmt.Sprintf("sqlserver://%v:%v@%v:%v?database=%v&encrypt=disable&connection+timeout=2500", username, password, host, port, database)

	var err error
	Db, err = gorm.Open(sqlserver.Open(DATABASE_URI), &gorm.Config{
		SkipDefaultTransaction: true,
		PrepareStmt:            true,
	})
	if err != nil {
		log.Fatalln(err)
	}

	Db.AutoMigrate(
		&models.User{},
	)
}
