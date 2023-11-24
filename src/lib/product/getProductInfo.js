const { ObjectId } = require("mongodb");
const Product = require("../../models/product");

const getProductInfo = async (productId) => {
  try {
    const product = await Product.findOne({ _id: new ObjectId(productId) });

    if (!product) {
      throw new Error("product not found");
    }

    return product;
  } catch (error) {
    return error;
  }
};

module.exports = getProductInfo;
