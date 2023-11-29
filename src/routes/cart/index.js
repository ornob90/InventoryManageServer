const addCart = require("../../api/cart/controllers/addCart");
const deleteCart = require("../../api/cart/controllers/deleteCart");
const getCart = require("../../api/cart/controllers/getCart");
const verifyShopAdmin = require("../../middlewares/verifyShopAdmin");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

// GET
router.get("/cart", verifyToken, verifyShopAdmin, getCart);

// POST
router.post("/cart", verifyToken, verifyShopAdmin, addCart);

// DELETE
router.delete("/cart/:id", verifyToken, verifyShopAdmin, deleteCart);

module.exports = router;
