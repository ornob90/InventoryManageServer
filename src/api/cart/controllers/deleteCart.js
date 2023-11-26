const { ObjectId } = require("mongodb");
const Cart = require("../../../models/cart");

const deleteCart = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Cart.deleteOne({ _id: new ObjectId(id) });

    res.send(result);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = deleteCart;
