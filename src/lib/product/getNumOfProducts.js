const Product = require("../../models/product");

const getNumOfProducts = async () => {
  const totalProducts = await Product.find({}).estimatedDocumentCount();

  return totalProducts;
};

module.exports = getNumOfProducts;
