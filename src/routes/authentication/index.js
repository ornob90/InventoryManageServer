const createAuthToken = require("../../api/authentication/controllers/createAuthToken");

const router = require("express").Router();

router.post("/jwt", createAuthToken);

module.exports = router;
