const express = require("express");

const loginController = require("../controllers/login");

const router = express.Router();

router.get("/login", loginController.login);

router.post("/login", loginController.signup);

module.exports = router;
