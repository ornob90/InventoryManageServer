const addUser = require("../../api/user/controllers/addUser");
const getAllUsers = require("../../api/user/controllers/getAllUsers");
const getUserByEmail = require("../../api/user/controllers/getUserByEmail");
const getUserCount = require("../../api/user/controllers/getUserCount");
const getUserInfo = require("../../api/user/controllers/getUserInfo");

const router = require("express").Router();

// GET
router.get("/users", getAllUsers);
router.get("/user", getUserInfo);
router.get("/user/:email", getUserByEmail);
router.get("/user-count", getUserCount);

// POST
router.put("/user", addUser);

module.exports = router;
