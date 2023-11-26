const addUser = require("../../api/user/controllers/addUser");
const getAllUsers = require("../../api/user/controllers/getAllUsers");
const getUserInfo = require("../../api/user/controllers/getUserInfo");

const router = require("express").Router();

// GET
router.get("/users", getAllUsers);
router.get("/user", getUserInfo);

// POST
router.put("/user", addUser);

module.exports = router;
