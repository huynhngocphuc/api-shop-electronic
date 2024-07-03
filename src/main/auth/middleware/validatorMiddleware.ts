import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { IApiResponse } from "../../http/HttpCommon";
import { STATUS_CODE, STATUS_MESSAGE } from "../../http/StatusCode";

export const validatorMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const response: IApiResponse<null> = {
      success: false,
      message: STATUS_MESSAGE[STATUS_CODE.BAD_REQUEST],
      errors: errors.array(),
    };
    res.status(STATUS_CODE.BAD_REQUEST).json(response);
  } else {
    console.log("Input not found error");
    next(); // next to middleware registerController
  }
};

export const validatorAuth = (validatorReq: any) =>{
  return [...validatorReq, validatorMiddleware]
}