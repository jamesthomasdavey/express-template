const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const pageTitle = "Home";
  res.render("home", { pageTitle });
});

app.get("*", (req, res) => {
  res.send("Sorry, page not found.");
});

app.listen(3000, () => {
  console.log("Starting...");
  setTimeout(() => {
    console.log("Your server has started, hue man.");
  }, 1500);
});
