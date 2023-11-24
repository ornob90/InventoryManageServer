const getTotalInvest = require("../../../utils/manager/getTotalInvest");
const getTotalProfit = require("../../../utils/manager/getTotalProfit");
const getTotalSales = require("../../../utils/manager/getTotalSales");

const getManagerSaleSummary = async (req, res, next) => {
  const { email } = req.query;

  const totalInvest = await getTotalInvest(email);
  const totalSales = await getTotalSales(email);
  const totalProfit = await getTotalProfit(email);
  // console.log(totalSales);

  res.send({ totalInvest, totalSales, totalProfit });
};

module.exports = getManagerSaleSummary;
