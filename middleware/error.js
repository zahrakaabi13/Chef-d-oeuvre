 
const ErrorResponse = require("../utils/errorResponse");


//check & custom msg
const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  //11000 in mongoose = duplicated
  if (err.code === 11000) {
    const message = `Duplicate Field value entered`;
    error = new ErrorResponse(message, 400);
  }

  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  console.log(error.message);

  //500 server error
  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};

module.exports = errorHandler;