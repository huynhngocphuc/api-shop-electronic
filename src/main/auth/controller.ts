import { Request, Response } from "express"
import { User } from "./models"
import { TRegisterReq } from "./type";
import { validationResult } from "express-validator";

export const registerController = async (req: Request<{},{},TRegisterReq>, res: Response) => {
  const { userName, passWord, email } = req.body;
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    // in case request params meet the validation criteria
    return res.status(200).json()
  }
  res.status(422).json({errors: errors.array()})
    // try {
    //     const user = await User.create({
    //         userName,
    //         passWord,
    //         email,
    //       });
    //     return user
    // } catch (error) {
    //     return error
    // }
}