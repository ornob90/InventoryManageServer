const addSale = require("../../api/sales/controllers/addSale");
const getManagerSaleSummary = require("../../api/sales/controllers/getManagerSaleSummary");

const router = require("express").Router();

// Get
router.get("/manager-sales-summary", getManagerSaleSummary);

// POST
router.post("/sales", addSale);

module.exports = router;
