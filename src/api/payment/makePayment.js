const updateAdminIncome = require("../../lib/admin/updateAdminIncome");
const getShopInfo = require("../../lib/shop/getShopInfo");
const updateShopInfo = require("../../lib/shop/updateShopInfo");

const makePayment = async (req, res, next) => {
  try {
    const { shopId, price } = req.body;

    let productLimit = price === 10 ? 200 : price === 20 ? 450 : 1500;

    const shopInfo = await getShopInfo(shopId);
    const updateStatus = await updateShopInfo(shopId, {
      productLimit: shopInfo.productLimit + productLimit,
    });
    const updateIncomeStatus = await updateAdminIncome(price);

    res.send({ updateStatus, ...updateIncomeStatus });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = makePayment;
