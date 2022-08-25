const express = require("express");

const chatController = require("../controllers/chat");

const router = express.Router();

router.post("/chat", chatController.postMessage);
router.get("/chat", chatController.getMessages);

module.exports = router;
