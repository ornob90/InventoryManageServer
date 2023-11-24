const updateUser = require("../../../lib/user/updateUser");
const Shop = require("../../../models/shop");

const addShop = async (req, res) => {
  try {
    const shopData = { ...req.body, productLimit: 3 };

    const shop = new Shop(shopData);

    await shop.save();

    const isUpdated = await updateUser(
      { email: shop.shopOwnerEmail },
      {
        $set: {
          shopId: shop._id,
          shopName: shop.shopName,
          shopLogo: shop.shopLogo,
          role: "manager",
        },
      }
    );

    res.send({
      message: "Inserted successfully!!",
      insertOne: true,
      updateUser: isUpdated,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: "There was a server side error!!" });
  }
};

module.exports = addShop;
