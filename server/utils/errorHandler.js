export class ApiError extends Error {
  constructor(statusCode, message, details = null) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
  }
}

export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export const errorMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  
  console.error(`[Error ${statusCode}]: ${message}`);
  
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    details: err.details || null,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};
