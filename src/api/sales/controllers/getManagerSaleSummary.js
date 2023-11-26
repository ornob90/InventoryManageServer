const getTotalInvest = require("../../../lib/manager/getTotalInvest");
const getTotalProfit = require("../../../lib/manager/getTotalProfit");
const getTotalSales = require("../../../lib/manager/getTotalSales");

const getManagerSaleSummary = async (req, res, next) => {
  const { email } = req.query;
  console.log(email);
  const totalInvest = await getTotalInvest(email);
  const totalSales = await getTotalSales(email);
  const totalProfit = await getTotalProfit(email);
  // console.log(totalSales);

  res.send({ totalInvest, totalSales, totalProfit });
};

module.exports = getManagerSaleSummary;
