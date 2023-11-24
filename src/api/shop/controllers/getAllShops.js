const Shop = require("../../../models/shop");

const getAllShops = async (req, res, next) => {
  try {
    const shops = await Shop.find({});
    res.send(shops);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = getAllShops;
