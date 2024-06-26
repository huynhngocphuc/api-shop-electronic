import { NextFunction, Request, Response } from "express";
import { ValidationError } from "sequelize";

interface AppError extends Error {
  statusCode?: number;
  status?: boolean;
}

const errorHandler = (error: AppError, req: Request, res: Response,  next: NextFunction) => {
  console.log("🚀 ~ errorHandler ~ next:", next)
  // if (error instanceof ValidationError) {
  //   const messages = error.errors.map((err) => err.message);
  //   return res.status(400).json({ errors: messages });
  // } else {
    const statusCode = error.statusCode || 500;
    const message = error.message || "Internal Server Error";
    res.status(statusCode).json({
      status: false,
      statusCode,
      message,
    });
  // } 
};

export { errorHandler };
