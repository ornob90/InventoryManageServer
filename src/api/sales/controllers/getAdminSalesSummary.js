const getNumOfProducts = require("../../../lib/product/getNumOfProducts");
const getAdminTotalSales = require("../../../lib/sales/getAdminTotalSales");
const User = require("../../../models/user");

const getAdminSalesSummary = async (req, res, next) => {
  try {
    const { income: totalIncome } = await User.findOne({ role: "admin" });
    const totalProduct = await getNumOfProducts();
    const totalSales = await getAdminTotalSales();

    res.send({ totalIncome, totalProduct, totalSales });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = getAdminSalesSummary;
