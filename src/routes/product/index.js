const addProduct = require("../../api/product/controllers/addProduct");
const getAllProducts = require("../../api/product/controllers/getAllProducts");
const updateProduct = require("../../api/product/controllers/updateProduct");

const router = require("express").Router();

// GET
router.get("/products", getAllProducts);

// POST
router.post("/product", addProduct);

// PUT
router.put("/product/:id", updateProduct);

module.exports = router;
