const { ObjectId } = require("mongodb");
const Product = require("../../../models/product");

const getProductsByShop = async (req, res, next) => {
  try {
    const { shopId } = req.params;

    const products = await Product.find({
      shopId: new ObjectId(shopId),
    });
    res.send(products || {});
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = getProductsByShop;
