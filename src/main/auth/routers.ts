import express, { NextFunction } from "express";
import { User } from "./models";
import { ValidationError } from "sequelize";

const routerAuth = express.Router();

routerAuth.post("/register", async (req, res, next: NextFunction) => {
  const { username, password, email } = req.body;
  try {
    const user = await User.create({
      username,
      password,
      email,
    });
    res.json(user);
  } catch (error) {
    next(error);
  }
});

routerAuth.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
  } catch (error) {}
});

export { routerAuth };
