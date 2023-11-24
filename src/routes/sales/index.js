const addSale = require("../../api/sales/controllers/addSale");
const getAdminSalesSummary = require("../../api/sales/controllers/getAdminSalesSummary");
const getManagerSaleSummary = require("../../api/sales/controllers/getManagerSaleSummary");
const getManagerSalesHistory = require("../../api/sales/controllers/getManagerSelsHistory");

const router = require("express").Router();

// Get
router.get("/manager-sales-summary", getManagerSaleSummary);
router.get("/manager-sales-history", getManagerSalesHistory);
router.get("/admin-sales-summary", getAdminSalesSummary);

// POST
router.post("/sales", addSale);

module.exports = router;
