const User = require("../models/user");

const verifyShopAdmin = async (req, res, next) => {
  try {
    const { email } = req.decoded;

    const { role } = await User.findOne({ email });
    // console.log(role);
    if (!role || role !== "manager") {
      res.status(403).send({ message: "unauthorized access3" });
    } else {
      next();
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = verifyShopAdmin;
