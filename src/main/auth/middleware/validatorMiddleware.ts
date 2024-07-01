import { NextFunction } from "express";
import { validationResult } from "express-validator";
import { Request, Response } from "express"



export const validatorMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
  if (!errors.isEmpty()) {
    // in case request params meet the validation criteria
     return res.status(400).json({
        success: false,
        errors: errors.array().map(error => ({
            msg: error.msg
        }))
     })
  }
  else{
    console.log(" có lỗi",errors)

  }
}