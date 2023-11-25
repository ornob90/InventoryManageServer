const clearCart = require("../../../lib/cart/clearCart");
const getProductInfo = require("../../../lib/product/getProductInfo");
const updateProductInfo = require("../../../lib/product/updateProductInfo");
const Sales = require("../../../models/sales");

const addSale = async (req, res, next) => {
  console.log("hit");
  try {
    const salesData = req.body;

    const { product: productId } = salesData;

    const sales = new Sales(salesData);

    await sales.save();

    const product = await getProductInfo(productId);

    const updateStatus = await updateProductInfo(productId, {
      saleCount: product.saleCount + 1,
      productQuantity: product.productQuantity - 1,
    });

    const status = await clearCart();

    res.send({
      message: "Inserted successfully!!",
      insertOne: true,
      updateProduct: updateStatus,
      clearCart: status,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = addSale;
