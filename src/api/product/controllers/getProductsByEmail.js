const { ObjectId } = require("mongodb");
const Product = require("../../../models/product");

const getProductsByEmail = async (req, res, next) => {
  try {
    const { email } = req.params;

    const products = await Product.find({
      userEmail: email,
    });
    res.send(products || {});
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = getProductsByEmail;
