const addUser = require("../../api/user/controllers/addUser");
const getUserInfo = require("../../api/user/controllers/getUserInfo");

const router = require("express").Router();

// GET
router.get("/user", getUserInfo);

// POST
router.post("/user", addUser);

module.exports = router;
