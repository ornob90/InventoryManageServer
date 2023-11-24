const User = require("../../../models/user");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = getAllUsers;
