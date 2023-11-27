const Sales = require("../../../models/sales");

const getManagerSalesHistoryCount = async (req, res, next) => {
  try {
    const { email } = req.query;

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
        $project: {
          productName: "$productInfo.productName",
          profit: 1,
          sellingDate: 1,
        },
      },
      {
        $count: "totalDocuments",
      },
    ];

    const salesHistoryCount = await Sales.aggregate(pipeline);
    const totalCount = salesHistoryCount[0]?.totalDocuments || 0;

    res.send({ totalCount });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = getManagerSalesHistoryCount;
