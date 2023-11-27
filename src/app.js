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
const productRoutes = require("./routes/product");
const salesRoutes = require("./routes/sales");
const authRoutes = require("./routes/authentication");
const cartRoutes = require("./routes/cart");
const paymentRoutes = require("./routes/payment");

const app = express();

const port = process.env.PORT || 5000;

applyMiddleWare(app);

app.use(shopRoutes);
app.use(userRoutes);
app.use(productRoutes);
app.use(salesRoutes);
app.use(authRoutes);
app.use(cartRoutes);
app.use(paymentRoutes);

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
