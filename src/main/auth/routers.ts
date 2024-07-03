import express, { NextFunction } from "express";
import { User } from "./models";
import { loginController, registerController } from "./controller";
import { loginValidator, registerValidator } from "./validator";
import { validationResult } from "express-validator";
import { validatorAuth, validatorMiddleware } from "./middleware/validatorMiddleware";
import { errorHandler } from "../../middleware/errorHandler";

const routerAuth = express.Router();

routerAuth.post(
  "/register",
  validatorAuth(registerValidator),
  registerController,
  errorHandler
);

routerAuth.post("/login", loginValidator, validatorMiddleware, loginController);

export { routerAuth };
