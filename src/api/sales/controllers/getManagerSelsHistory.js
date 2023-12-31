const Sales = require("../../../models/sales");

const getManagerSalesHistory = async (req, res, next) => {
  try {
    const { email, page, size } = req.query;

    const pageNum = parseInt(page);
    const pageSize = parseInt(size);

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
        $sort: {
          sellingDate: -1,
        },
      },
      {
        $skip: pageNum * pageSize,
      },
      {
        $limit: pageSize,
      },
    ];

    const salesHistory = await Sales.aggregate(pipeline);

    res.send(salesHistory);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = getManagerSalesHistory;
