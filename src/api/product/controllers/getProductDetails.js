const { ObjectId } = require("mongodb");
const Product = require("../../../models/product");

const getProductDetails = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Product Name
    // ● Product Image
    // ● Product Quantity
    // ● Sale Count

    const projection = {
      productName: 1,
      image: 1,
      productQuantity: 1,
      saleCount: 1,
    };

    const product = await Product.findOne({ _id: new ObjectId(id) }).select(
      projection
    );
    res.send(product);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = getProductDetails;
