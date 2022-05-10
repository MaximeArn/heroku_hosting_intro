const express = require("express");
const path = require("path");
const coolFace = require("cool-ascii-faces");
const PORT = process.env.PORT || 8453;
let reqCount = 1;

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
  .listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
