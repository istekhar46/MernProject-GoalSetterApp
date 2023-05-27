const errorHandler = (err, req, res, next) => {
    try {
      const statusCode = res.statusCode ? res.statusCode : 500;
  
      if (!res.headersSent) {
        res.status(statusCode);
        res.json({
          message: err.message,
          stack: process.env.NODE_ENV === 'production' ? null : err.stack,
        });
      }
    } catch (error) {
      // Pass the error to the next error handler
      next(error);
    }
  };
  
  module.exports = { errorHandler };
  