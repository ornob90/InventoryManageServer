const getProductInfo = require("../../../lib/product/getProductInfo");
const updateProductInfo = require("../../../lib/product/updateProductInfo");
const Sales = require("../../../models/sales");

const addSale = async (req, res, next) => {
  const salesData = req.body;

  const { product: productId } = salesData;

  const sales = new Sales(salesData);

  await sales.save();

  const product = await getProductInfo(productId);

  const updateStatus = await updateProductInfo(productId, {
    saleCount: product.saleCount + 1,
    productQuantity: product.productQuantity - 1,
  });

  res.send({
    message: "Inserted successfully!!",
    insertOne: true,
    updateProduct: updateStatus,
  });
};

module.exports = addSale;
