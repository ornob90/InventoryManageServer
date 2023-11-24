const { model, Schema } = require("mongoose");

const shopSchema = new Schema({
  shopName: {
    type: String,
    required: true,
  },
  shopLogo: {
    type: String,
    required: true,
  },
  shopLocation: {
    type: String,
    required: true,
  },
  shopDescription: {
    type: String,
    required: true,
  },
  productLimit: {
    type: Number,
    required: true,
  },
  shopOwnerEmail: {
    type: String,
    required: true,
    unique: true,
  },
  shopOwnerName: {
    type: String,
  },
});

const Shop = model("Shop", shopSchema);

module.exports = Shop;
