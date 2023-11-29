const Shop = require("../../../models/shop");

const getShopID = async (req, res, next) => {
  try {
    const { email } = req.query;

    const shopID = await Shop.findOne({ shopOwnerEmail: email }, { _id: 1 });
    res.send({ shopID: shopID._id });

      

  } catch (error) {
    console.error(error.message);
    next(error);
  }
};

module.exports = getShopID;
