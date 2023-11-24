const Product = require("../../../models/product");

const getProductCountsByEmail = async (req, res, next) => {
  try {
    const { email } = req.query;

    const count = await Product.find({
      userEmail: email,
    }).estimatedDocumentCount();

    res.send({ productsCount: count });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = getProductCountsByEmail;
