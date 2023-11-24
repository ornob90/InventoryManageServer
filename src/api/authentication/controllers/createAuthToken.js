const jwt = require("jsonwebtoken");
require("dotenv").config();

const createAuthToken = (req, res, next) => {
  try {
    const user = req.body;

    const token = jwt.sign(user, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    res.send({ token });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = createAuthToken;
