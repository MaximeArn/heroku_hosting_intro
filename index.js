const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("pages/index"))
  .listen(PORT, () => {
    const logsNumber = 10;
    const interval = 1000;
    for (const i = 0; i < logsNumber; i++) {
      setTimeout(() => console.log(`log ${logsNumber}`), interval);
    }
    console.log(`Listening on ${PORT}`);
  });
