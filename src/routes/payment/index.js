const createPaymentIntent = require("../../api/payment/createPaymentIntent");
const makePayment = require("../../api/payment/makePayment");
const verifyShopAdmin = require("../../middlewares/verifyShopAdmin");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

// POST
router.post(
  "/create-payment-intent",
  verifyToken,
  verifyShopAdmin,
  createPaymentIntent
);
router.post("/make-payment", verifyToken, verifyShopAdmin, makePayment);

module.exports = router;
