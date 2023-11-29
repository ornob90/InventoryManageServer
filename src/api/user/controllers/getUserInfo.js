const User = require("../../../models/user");

const getUserInfo = async (req, res, next) => {
  try {
    const { email } = req.query;
    // console.log(req.params);
    const user = await User.findOne({ email });
    res.send(user);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = getUserInfo;
