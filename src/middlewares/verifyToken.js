const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401).send({ message: "unauthorized access" });
  }

  const token = req.headers.authorization.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      res.status(403).send({ message: "unauthorized access" });
    }

    req.decoded = decoded;
    next();
  });
};

module.exports = verifyToken;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsIm5hbWUiOiJhZG1pblBlcnNvbiIsImlhdCI6MTcwMDgyODQyNSwiZXhwIjoxNzAwODMyMDI1fQ.mc5M_aUEnecnStGgCPe4rhBaGfJF8OYjJGAYjv9SlqY
