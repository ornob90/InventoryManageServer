const express = require("express");
const connectDB = require("./db/connectDB");
require("dotenv").config();

const globalErrorHandler = require("./utils/globalErrorHandler");

const app = express();
const port = process.env.PORT || 5000;

app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${res.originalUrl} on the server`);
  error.status = 404;

  next(error);
});

// error handling middleware
app.use(globalErrorHandler);

const main = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log("Server running...");
  });
};

main();
