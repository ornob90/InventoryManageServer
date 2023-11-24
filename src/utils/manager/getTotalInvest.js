const Sales = require("../../models/sales");

const getTotalInvest = async (email) => {
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
        totalInvest: { $sum: "$productInfo.productionCost" },
      },
    },
  ];

  const [{ totalInvest }] = (await Sales.aggregate(pipeline).exec()) || [
    { totalInvest: 0 },
  ];

  // return await Sales.populate("product");

  return totalInvest;
};

module.exports = getTotalInvest;
