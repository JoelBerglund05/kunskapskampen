const express = require("express");
const path = require("path");

const app = express();

app.use(
  "/css/bootstraps",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")),
);
app.use("/js", express.static(path.join(__dirname, "js")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/sign-up", (req, res) => {
  res.sendFile(path.join(__dirname, "sign-up.html"));
});

app.get("/active-games", (req, res) => {
  res.sendFile(path.join(__dirname, "active-games.html"));
});

app.listen(5000, () => {
  console.log("Listening on port " + 5000);
});
