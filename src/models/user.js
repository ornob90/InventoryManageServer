const { ObjectId } = require("mongodb");
const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
  shopId: {
    type: ObjectId,
  },
  shopName: {
    type: String,
  },
  shopLogo: {
    type: String,
  },
});

const User = model("User", userSchema);

module.exports = User;
