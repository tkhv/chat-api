const User = require("../models/user");

exports.login = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    console.log("added");
    res.send();
  } catch (err) {
    console.log(err);
    res.send();
  }
};

/*exports.login = (req, res, next) => {
  User.find({ username: req.body.username })
    .then((result) => {
      if (result.length < 1) {
        console.log("Adding new user...");
        const user = new User({ username: req.body.username });
        user
          .save()
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      } else {
        console.log("User already exists.");
      }
    })
    .catch((err) => console.log(err));
  res.send();
}; */
