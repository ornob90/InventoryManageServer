const Cart = require("../../../models/cart");

const getCart = async (req, res, next) => {
  try {
    const carts = await Cart.find({}).populate("product");
    res.send(carts);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = getCart;
