import { body } from "express-validator"
import { TableFieldName } from "./models"

export const registerValidator = [
    body([TableFieldName.UserName]).notEmpty().withMessage("User Name is required"),
    body([TableFieldName.Password]).notEmpty().withMessage("Password is required"),
    body([TableFieldName.Email]).isEmail().withMessage("Invalid email format")
]