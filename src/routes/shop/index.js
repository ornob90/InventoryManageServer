const addShop = require("../../api/shop/controllers/addShop");

const router = require("express").Router();

router.post("/shop", addShop);

module.exports = router;
