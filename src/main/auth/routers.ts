import express, { NextFunction } from "express";
import { User } from "./models";
import { registerController } from "./controller";
import { registerValidator } from "./validator";
import { validationResult } from "express-validator";
import { validatorMiddleware } from "./middleware/validatorMiddleware";

const routerAuth = express.Router();

routerAuth.post("/register", registerValidator, validatorMiddleware, registerController)

routerAuth.post("/login", async (req, res) => {
 
});

export { routerAuth };
