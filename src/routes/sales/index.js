const addSale = require("../../api/sales/controllers/addSale");

const router = require("express").Router();

// POST
router.post("/sales", addSale);

module.exports = router;
