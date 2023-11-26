const Sales = require("../../models/sales");

const getTotalProfit = async (email) => {
  const pipeline = [
    {
      $group: {
        _id: null,
        totalProfit: {
          $sum: "$profit",
        },
      },
    },
  ];

  const result = (await Sales.aggregate(pipeline).exec()) || [];
  const totalProfit = result[0]?.totalProfit || 0;

  return totalProfit;
};

module.exports = getTotalProfit;
