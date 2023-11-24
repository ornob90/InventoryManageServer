const Sales = require("../../models/sales");

const getTotalSales = async (email) => {
  const pipeline = [
    {
      $lookup: {
        from: "products",
        localField: "product",
        foreignField: "_id",
        as: "productInfo",
      },
    },
    {
      $unwind: "$productInfo",
    },
    {
      $match: {
        "productInfo.userEmail": email,
      },
    },
    {
      $group: {
        _id: null,
        totalSales: {
          $sum: "$productInfo.saleCount",
        },
      },
    },
  ];

  const [{ totalSales }] = (await Sales.aggregate(pipeline).exec()) || [
    { totalSales: 0 },
  ];

  return totalSales;
};

module.exports = getTotalSales;
