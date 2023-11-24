const { ObjectId } = require("mongodb");
const Shop = require("../../models/shop");

const updateShopInfo = async (shopId, newData) => {
  try {
    const res = await Shop.updateOne(
      { _id: new ObjectId(shopId) },
      {
        $set: newData,
      }
    );
    return res.modifiedCount > 0;
  } catch (error) {
    return error;
  }
};

module.exports = updateShopInfo;
