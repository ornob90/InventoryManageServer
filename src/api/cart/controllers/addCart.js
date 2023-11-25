const Cart = require("../../../models/cart");

const addCart = async (req, res, next) => {
  try {
    const cartData = req.body;

    const cart = new Cart(cartData);
    await cart.save();

    res.send({ message: "Inserted successfully!!", insertOne: true });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = addCart;
