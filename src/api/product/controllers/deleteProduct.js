const { ObjectId } = require("mongodb");
const Product = require("../../../models/product");
const getShopInfo = require("../../../lib/shop/getShopInfo");
const updateShopInfo = require("../../../lib/shop/updateShopInfo");

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { shopId } = req.body;

    const result = await Product.deleteOne({ _id: new ObjectId(id) });

    const shop = await getShopInfo(shopId);

    await updateShopInfo(shopId, {
      productLimit: shop.productLimit + 1,
    });

    res.send({
      message: "Deleted Successfully",
      deleteOne: result.deletedCount > 0,
      status: result.acknowledged,
    });
  } catch (error) {
    console.error(error);

    next(error);
  }
};

module.exports = deleteProduct;
