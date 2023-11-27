const User = require("../../../models/user");

const getAllUsers = async (req, res, next) => {
  try {
    const { page, size } = req.query;
    const users = await User.find({})
      .skip(page * size)
      .limit(size);

    res.send(users);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = getAllUsers;
