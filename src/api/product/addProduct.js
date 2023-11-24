const getShopInfo = require("../../lib/shop/getShopInfo");
const updateShopInfo = require("../../lib/shop/updateShopInfo");
const Product = require("../../models/product");

const addProduct = async (req, res, next) => {
  try {
    const productData = req.body;

    const product = new Product(productData);

    const shop = await getShopInfo(product.shopId);

    if (shop.productLimit <= 0) {
      res.send({ message: "Product limit 0", insertOne: false });
    } else {
      await updateShopInfo(product.shopId, {
        productLimit: shop.productLimit - 1,
      });

      await product.save();

      res.send({
        message: "Inserted successfully!!",
        insertOne: true,
      });
    }
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};

module.exports = addProduct;
