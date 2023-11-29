const addUser = require("../../api/user/controllers/addUser");
const getAllUsers = require("../../api/user/controllers/getAllUsers");
const getUserByEmail = require("../../api/user/controllers/getUserByEmail");
const getUserCount = require("../../api/user/controllers/getUserCount");
const getUserInfo = require("../../api/user/controllers/getUserInfo");
const verifyAdmin = require("../../middlewares/verifyAdmin");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

// GET
router.get("/users", verifyToken, verifyAdmin, getAllUsers);
router.get("/user", verifyToken, getUserInfo);
router.get("/user/:email", verifyToken, getUserByEmail);
router.get("/user-count", verifyToken, verifyAdmin, getUserCount);

// POST
router.put("/user", verifyToken, addUser);

module.exports = router;
