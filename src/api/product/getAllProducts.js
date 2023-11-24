const Product = require("../../models/product");

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = getAllProducts;
