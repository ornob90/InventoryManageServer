const addCart = require("../../api/cart/controllers/addCart");

const router = require("express").Router();

// POST
router.post("/cart", addCart);

module.exports = router;
