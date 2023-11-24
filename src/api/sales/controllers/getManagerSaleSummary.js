const getTotalInvest = require("../../../utils/manager/getTotalInvest");
const getTotalSales = require("../../../utils/manager/getTotalSales");

const getManagerSaleSummary = async (req, res, next) => {
  const { email } = req.query;

  const totalInvest = await getTotalInvest(email);
  const totalSales = await getTotalSales(email);
  console.log(totalSales);
  res.send({ totalInvest, totalSales });
};

module.exports = getManagerSaleSummary;
