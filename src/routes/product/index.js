const addProduct = require("../../api/product/addProduct");
const getAllProducts = require("../../api/product/getAllProducts");

const router = require("express").Router();

// GET
router.get("/products", getAllProducts);

// POST
router.post("/product", addProduct);

module.exports = router;
