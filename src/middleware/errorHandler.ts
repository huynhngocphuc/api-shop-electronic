import { NextFunction, Request, Response } from "express";
import { ValidationError } from "sequelize";

interface AppError extends Error {
  statusCode?: number;
  status?: boolean;
}

const errorHandler = (error: AppError, req: Request, res: Response,  next: NextFunction) => {
    const statusCode = error.statusCode || 500;
    const message = error.message || "Internal Server Error";
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  // } 
};

export { errorHandler };
