const { ObjectId } = require("mongodb");
const { model, Schema } = require("mongoose");

const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  productQuantity: {
    type: Number,
    required: true,
  },
  productLocation: {
    type: String,
    required: true,
  },
  productionCost: {
    type: Number,
    required: true,
  },
  profitMargin: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  discount: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  productDescription: {
    type: String,
    required: true,
  },
  sellingPrice: {
    type: Number,
    required: true,
  },
  shopId: {
    type: ObjectId,
    required: true,
  },
  shopName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  addedDate: {
    type: Date,
    default: Date.now,
  },
  saleCount: {
    type: Number,
    default: 0,
  },
});

const Product = model("Product", productSchema);

module.exports = Product;
