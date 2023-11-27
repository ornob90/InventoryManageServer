const createPaymentIntent = require("../../api/payment/createPaymentIntent");
const makePayment = require("../../api/payment/makePayment");

const router = require("express").Router();

// POST
router.post("/create-payment-intent", createPaymentIntent);
router.post("/make-payment", makePayment);

module.exports = router;
