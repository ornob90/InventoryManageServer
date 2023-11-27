const User = require("../../../models/user");

const getUserCount = async (req, res, next) => {
  try {
    const userCount = await User.find({}).estimatedDocumentCount();

    res.send({ userCount });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = getUserCount;
