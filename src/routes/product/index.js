const addProduct = require("../../api/product/controllers/addProduct");
const deleteProduct = require("../../api/product/controllers/deleteProduct");
const getAllProducts = require("../../api/product/controllers/getAllProducts");
const getProductCountsByEmail = require("../../api/product/controllers/getProductCountsByEmail");
const getProductDetails = require("../../api/product/controllers/getProductDetails");
const getProductsByEmail = require("../../api/product/controllers/getProductsByEmail");
const updateProduct = require("../../api/product/controllers/updateProduct");
const verifyShopAdmin = require("../../middlewares/verifyShopAdmin");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

// GET
router.get("/products", verifyToken, verifyShopAdmin, getAllProducts);
router.get("/product/:id", verifyToken, verifyShopAdmin, getProductDetails);
router.get(
  "/products/:email",
  verifyToken,
  verifyShopAdmin,
  getProductsByEmail
);
router.get(
  "/productsCount",
  verifyToken,
  verifyShopAdmin,
  getProductCountsByEmail
);

// POST
router.post("/product", verifyToken, verifyShopAdmin, addProduct);

// PUT
router.put("/product/:id", verifyToken, verifyShopAdmin, updateProduct);

// DELETE
router.delete("/product/:id", verifyToken, verifyShopAdmin, deleteProduct);

module.exports = router;
