const express = require("express");

const chatController = require("../controllers/chat");

const router = express.Router();

app.post("/chat", chatController.postMessage);

module.exports = router;
