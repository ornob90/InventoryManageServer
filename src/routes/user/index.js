const addUser = require("../../api/user/controllers/addUser");
const getAllUsers = require("../../api/user/controllers/getAllUsers");
const getUserByEmail = require("../../api/user/controllers/getUserByEmail");
const getUserInfo = require("../../api/user/controllers/getUserInfo");

const router = require("express").Router();

// GET
router.get("/users", getAllUsers);
router.get("/user", getUserInfo);
router.get("/user/:email", getUserByEmail);

// POST
router.put("/user", addUser);

module.exports = router;
