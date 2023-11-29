const validateShopID = require("../../../lib/shop/validateShopID");
const updateUser = require("../../../lib/user/updateUser");

const makeShopAdmin = async (req, res, next) => {
  try {
    const { email } = req.query;
    const { shopId } = req.body || {};

    if (!shopId) {
      res.status(400).send({
        error: "Bad Request",
        message: "The request body is missing or malformed.",
      });
    }

    const shop = await validateShopID(shopId);

    if (!shop) {
      res.status(404).send({
        error: "Not Found",
        message: "Shop not found with the given ID.",
      });
    }

    const dataToUpdate = {
      shopName: shop.shopName,
      shopLogo: shop.shopLogo,
      shopId,
      role: "manager",
    };

    const updated = await updateUser(
      { email },
      {
        $set: dataToUpdate,
      }
    );

    if (updated) {
      res.send({ message: "Updated successfully!", updateOne: true });
    } else {
      res.send({ message: "Update failed!", updateOne: false });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = makeShopAdmin;
