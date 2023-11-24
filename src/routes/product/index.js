const addProduct = require("../../api/product/controllers/addProduct");
const deleteProduct = require("../../api/product/controllers/deleteProduct");
const getAllProducts = require("../../api/product/controllers/getAllProducts");
const getProductDetails = require("../../api/product/controllers/getProductDetails");
const updateProduct = require("../../api/product/controllers/updateProduct");

const router = require("express").Router();

// GET
router.get("/products", getAllProducts);
router.get("/product/:id", getProductDetails);

// POST
router.post("/product", addProduct);

// PUT
router.put("/product/:id", updateProduct);

// DELETE
router.delete("/product/:id", deleteProduct);

module.exports = router;
