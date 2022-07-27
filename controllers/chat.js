const Message = require("../models/message");

exports.postMessage = async (req, res, next) => {
  try {
    await Message.create(req.body);
    console.log("message added");
    res.send();
  } catch {
    console.log(err);
    res.send();
  }
};

/*
exports.login = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    console.log("added");
    res.send();
  } catch (err) {
    console.log(err);
    res.send();
  }
};*/
