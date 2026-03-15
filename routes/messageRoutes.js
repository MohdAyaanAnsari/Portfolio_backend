const express = require("express");
const router = express.Router();

const Message = require("../models/Message");

router.post("/", async (req, res) => {
  try {
    const message = new Message(req.body);
    await message.save();

    res.json({ success: true, message: "Message saved" });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

router.get("/", async (req, res) => {
  const messages = await Message.find().sort({ createdAt: -1 });
  res.json(messages);
});

module.exports = router;