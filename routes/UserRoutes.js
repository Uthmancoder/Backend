const express = require("express");
const router = express.Router();
const { SignUp } = require("../Controllers/userController");

router.post("/sign-up", SignUp);

module.exports = router;
