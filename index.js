const express = require("express");
const path = require("path");
const coolFace = require("cool-ascii-faces");
const PORT = process.env.PORT || 8453;
let reqCount = 1;

showTimes = () => {
  let result = "";
  const times = process.env.TIMES || 5;
  for (i = 0; i < times; i++) {
    result += i + " ";
  }
  return result;
};

express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (_, res) => {
    res.render("pages/index");
    console.log(`get request was made ${reqCount} times !`);
    reqCount++;
  })
  .get("/cool", (_, res) => res.send(coolFace()))
  .get("/times", (req, res) => res.send(showTimes()))
  .listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
