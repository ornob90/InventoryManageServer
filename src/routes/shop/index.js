const addShop = require("../../api/shop/controllers/addShop");
const getAllShops = require("../../api/shop/controllers/getAllShops");
const getShopID = require("../../api/shop/controllers/getShopId");
const makeShopAdmin = require("../../api/shop/controllers/makeShopAdmin");
const verifyAdmin = require("../../middlewares/verifyAdmin");
const verifyShopAdmin = require("../../middlewares/verifyShopAdmin");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

// GET
router.get("/shops", verifyToken, verifyAdmin, getAllShops);
router.get("/shopID", verifyToken, verifyShopAdmin, getShopID);

// POST
router.post("/shop", verifyToken, verifyShopAdmin, addShop);

// PUT
router.put("/make-shop-admin", verifyToken, makeShopAdmin);

module.exports = router;
