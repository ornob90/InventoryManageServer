const Sales = require("../../models/sales");

const getAdminTotalSales = async () => {
  const totalSales = await Sales.find({}).estimatedDocumentCount();

  return totalSales;
};

module.exports = getAdminTotalSales;
