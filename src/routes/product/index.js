const addProduct = require("../../api/product/addProduct");

const router = require("express").Router();

// POST
router.post("/product", addProduct);

module.exports = router;
