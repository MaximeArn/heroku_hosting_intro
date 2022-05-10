const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
// const logsNumber = 10;
// const interval = 1000;

// const printLogXtimes = () => {
//   for (const i = 0; i < logsNumber; i++) {
//     setTimeout(() => {
//       console.log(`log ${logsNumber}`);
//     }, interval);
//   }
// };

express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("pages/index"))
  .listen(PORT, setTimeout(console.log("log"), 5000));
