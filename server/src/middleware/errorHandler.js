import { env } from "../config/env.js";
import { AppError } from "../utils/AppError.js";

// أي رابط مش موجود
export const notFound = (req, res, next) => {
  next(new AppError("Route not found", 404));
};

// معالج الأخطاء المركزي
export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode ?? err.status ?? 500;
  const isServerError = statusCode >= 500;

  if (isServerError) console.error(err);

  res.status(statusCode).json({
    success: false,
    message: isServerError ? "Internal server error" : err.message,
    ...(env.isProd ? {} : { stack: err.stack }),
  });
};