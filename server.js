const express = require("express");
const server = express();
const port = 8000;
server.use(express.static("public/stylesheets"));
const path = require("path");
server.use(express.json());

server.listen(port, (req, res) => {
  console.log(`server is running on port ${port}`);
});

var now = new Date();
var heure = now.getHours();
var jour = now.toLocaleString("en-us", { weekday: "long" });

function MyMiddelware(req, res, next) {
  if (heure > 8 && heure < 22 && jour != "Sunday" && jour != "Saturday")
    return next();
  else res.sendFile(path.join(__dirname + "/public/images/ouvert.png"));
}

server.get("/Homepage.html", MyMiddelware, (req, res) => {
  res.sendFile(path.join(__dirname + "/Homepage.html"));
});
server.get("/Contactus.html", MyMiddelware, (req, res) => {
  res.sendFile(path.join(__dirname + "/Contactus.html"));
});
server.get("/OurServices.html", MyMiddelware, (req, res) => {
  res.sendFile(path.join(__dirname + "/OurServices.html"));
});
