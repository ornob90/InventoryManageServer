const express = require("express");
const connectDB = require("./db/connectDB");
require("dotenv").config();

// middle wares
const applyMiddleWare = require("./middlewares/index");

// error handlers
const globalErrorHandler = require("./utils/globalErrorHandler");

// routes
const shopRoutes = require("./routes/shop");
const userRoutes = require("./routes/user");

const app = express();

const port = process.env.PORT || 5000;

applyMiddleWare(app);

app.use(shopRoutes);
app.use(userRoutes);

app.get("/", (req, res) => {
  res.send("Server running...");
});

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
