const addUser = require("../../api/user/controllers/addUser");

const router = require("express").Router();

router.post("/user", addUser);

module.exports = router;
