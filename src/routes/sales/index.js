const addSale = require("../../api/sales/controllers/addSale");
const getAdminSalesSummary = require("../../api/sales/controllers/getAdminSalesSummary");
const getManagerSaleSummary = require("../../api/sales/controllers/getManagerSaleSummary");
const getManagerSalesHistoryCount = require("../../api/sales/controllers/getManagerSellHistoryCount");
const getManagerSalesHistory = require("../../api/sales/controllers/getManagerSelsHistory");
const verifyAdmin = require("../../middlewares/verifyAdmin");
const verifyShopAdmin = require("../../middlewares/verifyShopAdmin");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

// Get
router.get(
  "/manager-sales-summary",
  verifyToken,
  verifyShopAdmin,
  getManagerSaleSummary
);
router.get(
  "/manager-sales-history",
  verifyToken,
  verifyShopAdmin,
  getManagerSalesHistory
);
router.get(
  "/manager-sales-history-count",
  verifyToken,
  verifyShopAdmin,
  getManagerSalesHistoryCount
);
router.get(
  "/admin-sales-summary",
  verifyToken,
  verifyAdmin,
  getAdminSalesSummary
);

// POST
router.post("/sales", verifyToken, verifyShopAdmin, addSale);

module.exports = router;
