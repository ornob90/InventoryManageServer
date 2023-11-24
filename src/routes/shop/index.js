const addShop = require("../../api/shop/controllers/addShop");
const getAllShops = require("../../api/shop/controllers/getAllShops");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

// GET
router.get("/shops", verifyToken, getAllShops);

// POST
router.post("/shop", addShop);

module.exports = router;
