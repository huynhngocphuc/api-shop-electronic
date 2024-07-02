import { NextFunction, Request, Response } from "express";
import { User } from "./models";
import { TRegisterReq } from "./type";
import { validationResult } from "express-validator";

export const registerController = async (
  req: Request<{}, {}, TRegisterReq>,
  res: Response,
  next: NextFunction
) => {
  const { userName, passWord, email } = req.body;
  try {
    const user = await User.create({
      userName,
      passWord,
      email,
    });
    res.status(200).json(user);
  } catch (error) {
    return error;
  }
};
