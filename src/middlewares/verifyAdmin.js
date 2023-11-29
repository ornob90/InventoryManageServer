const User = require("../models/user");

const verifyAdmin = async (req, res, next) => {
  try {
    const { email } = req.decoded;

    const { role } = await User.findOne({ email });

    if (!role || role !== "admin") {
      res.status(403).send({ message: "unauthorized access4" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = verifyAdmin;
