const { ObjectId } = require("mongodb");
const { model, Schema } = require("mongoose");

const salesSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  profit: {
    type: Number,
    required: true,
  },
  sellingDate: {
    type: Date,
    default: Date.now,
  },
});

const Sales = model("Sales", salesSchema);

module.exports = Sales;
