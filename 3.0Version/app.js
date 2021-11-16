const express = require("express");

const app = express();

app.set("views", "html");
app.set("view engine", "ejs");

app.use(express.static("asset"));

app.use("/", (req, res, next) => {
  res.send("Not Here");
});
