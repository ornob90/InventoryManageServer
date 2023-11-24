const addShop = require("../../api/shop/controllers/addShop");
const getAllShops = require("../../api/shop/controllers/getAllShops");

const router = require("express").Router();

// GET
router.get("/shops", getAllShops);

// POST
router.post("/shop", addShop);

module.exports = router;
