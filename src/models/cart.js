const { model, Schema } = require("mongoose");

const cartSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  cartAdded: {
    type: Date,
    default: Date.now,
  },
  userEmail: {
    type: String,
    required: true,
  },
});

const Cart = model("Cart", cartSchema);

module.exports = Cart;
