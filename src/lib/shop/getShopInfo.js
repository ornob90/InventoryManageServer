const { ObjectId } = require("mongodb");
const Shop = require("../../models/shop");

const getShopInfo = async (shopId) => {
  try {
    const shop = await Shop.findOne({ _id: new ObjectId(shopId) });

    if (!shop) {
      throw new Error("Shop not found");
    }

    return shop;
  } catch (error) {
    return error;
  }
};

module.exports = getShopInfo;
