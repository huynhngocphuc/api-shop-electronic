import { body } from "express-validator"

export const registerValidator = [
    body("userName").notEmpty().withMessage("User Name is required"),
    body("passWord").notEmpty().withMessage("Password is required"),
    body("email").isEmail().withMessage("Invalid email format")
]