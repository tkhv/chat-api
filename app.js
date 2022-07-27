const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

// Utils & models
const dbConnect = require("./utils/database");

// Routes
const loginRoutes = require("./routes/login");
const chatRoutes = require("./routes/chat");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(loginRoutes);
app.use(chatRoutes);

console.log("Started.");
dbConnect()
  .then((result) => {
    console.log("Connected.");
    app.listen(3000);
  })
  .catch((err) => console.log(err));
