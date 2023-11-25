const addCart = require("../../api/cart/controllers/addCart");
const getCart = require("../../api/cart/controllers/getCart");

const router = require("express").Router();

// GET
router.get("/cart", getCart);

// POST
router.post("/cart", addCart);

module.exports = router;
