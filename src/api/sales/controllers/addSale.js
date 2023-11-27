const clearCart = require("../../../lib/cart/clearCart");
const getProductInfo = require("../../../lib/product/getProductInfo");
const updateProductInfo = require("../../../lib/product/updateProductInfo");
const Sales = require("../../../models/sales");

const addSale = async (req, res, next) => {
  // console.log("hit");
  try {
    const salesData = req.body;
    let updateCount = 0;
    let insertCount = 0;

    for (const { product } of salesData) {
      const saleInfo = {
        product: product?._id,
        profit: product?.sellingPrice - product?.productionCost,
      };
      const sales = new Sales(saleInfo);
      await sales.save();
      const productToUpdate = await getProductInfo(product?._id);

      const updateStatus = await updateProductInfo(productToUpdate?._id, {
        saleCount: productToUpdate.saleCount + 1,
        productQuantity: productToUpdate.productQuantity - 1,
      });

      if (updateStatus) updateCount++;
      insertCount++;
    }

    const status = await clearCart();

    res.send({
      message: "Inserted successfully!",
      insertCount,
      updateCount,
      cartClear: status,
    });

    // console.log(salesData);

    // const { product: productId } = salesData;

    // const sales = new Sales(salesData);

    // await sales.save();

    // const product = await getProductInfo(productId);

    // const updateStatus = await updateProductInfo(productId, {
    //   saleCount: product.saleCount + 1,
    //   productQuantity: product.productQuantity - 1,
    // });

    // const status = await clearCart();

    // res.send({
    //   message: "Inserted successfully!!",
    //   insertOne: true,
    //   updateProduct: updateStatus,
    //   clearCart: status,
    // });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = addSale;
