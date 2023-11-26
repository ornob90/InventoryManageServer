const addCart = require("../../api/cart/controllers/addCart");
const deleteCart = require("../../api/cart/controllers/deleteCart");
const getCart = require("../../api/cart/controllers/getCart");

const router = require("express").Router();

// GET
router.get("/cart", getCart);

// POST
router.post("/cart", addCart);

// DELETE
router.delete("/cart/:id", deleteCart);

module.exports = router;
