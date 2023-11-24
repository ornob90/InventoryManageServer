const { ObjectId } = require("mongodb");
const Product = require("../../models/product");

const updateProductInfo = async (productId, newData) => {
  try {
    const res = await Product.updateOne(
      { _id: new ObjectId(productId) },
      {
        $set: newData,
      }
    );
    return res.modifiedCount > 0;
  } catch (error) {
    return error;
  }
};

module.exports = updateProductInfo;
