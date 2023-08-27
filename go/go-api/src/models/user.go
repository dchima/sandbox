package models

import (
	uuid "github.com/satori/go.uuid"
	"gorm.io/gorm"
)

type User struct {
	ID          string `json:"id"`
	Username    string `json:"username" gorm:"unique"`
	FullName    string `json:"full_name"`
	Password    string `json:"password"`
	Email       string `json:"email" gorm:"unique"`
	PhoneNumber string `json:"phone_number" gorm:"unique"`
	CreatedAt   string `json:"created_at" gorm:"type:datetime;default:getdate()"`
}

func (base *User) BeforeCreate(tx *gorm.DB) error {
	base.ID = uuid.NewV4().String()
	return nil
}
