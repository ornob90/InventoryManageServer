const { ObjectId } = require("mongodb");
const Shop = require("../../models/shop");

const validateShopID = async (shopId) => {
  try {
    const shop = await Shop.findOne({ _id: new ObjectId(shopId) });
    return shop;
  } catch (error) {
    console.error(error);
    return error;
  }
};

module.exports = validateShopID;
