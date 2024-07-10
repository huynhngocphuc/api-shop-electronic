import { NextFunction, Request, Response } from "express";
import { User } from "./models";
import { TLoginReq, TRegisterReq } from "./type";
import { validationResult } from "express-validator";
import { STATUS_CODE, STATUS_MESSAGE } from "../http/StatusCode";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerController = async (
  req: Request<{}, {}, TRegisterReq>,
  res: Response,
  next: NextFunction
) => {
  const { userName, passWord, email } = req.body;
  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(STATUS_CODE.CONFLICT).json({
        success: false,
        message: 'Email already in use',
      });
    }
    const user = await User.create({
      userName,
      passWord,
      email,
    });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const loginController = async (
  req: Request<{}, {}, TLoginReq>,
  res: Response,
  next: NextFunction
) => {
  const { email, passWord } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(STATUS_CODE.UNAUTHORIZED).json({
        success: false,
        message: STATUS_MESSAGE[STATUS_CODE.UNAUTHORIZED],
      });
    }

    const isMatch = await bcrypt.compare(passWord, user.passWord);
    if (!isMatch) {
      return res.status(STATUS_CODE.UNAUTHORIZED).json({
        success: false,
        message: "Invalid password",
      });
    }

    const token = jwt.sign({ userId: user.userId }, "key_token", {
      expiresIn: "1h",
    });

    return res.status(STATUS_CODE.OK).json({token, user});
    
  } catch (error) {
    next()
  }
};
