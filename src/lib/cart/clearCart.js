const Cart = require("../../models/cart");

const clearCart = async () => {
  try {
    const result = await Cart.deleteMany({});
    console.log(result);
    return result.deletedCount > 0;
  } catch (error) {
    return error;
  }
};

module.exports = clearCart;
