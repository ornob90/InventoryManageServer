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

  const [{ totalProfit }] = (await Sales.aggregate(pipeline).exec()) || [
    { totalProfit: 0 },
  ];

  return totalProfit;
};

module.exports = getTotalProfit;
