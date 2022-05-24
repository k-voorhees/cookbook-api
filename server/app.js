const express = require("express");
const app = express();
const path = require("path");

const recipes = require("./routes/recipes");
const pageControl = require("./routes/control");

require("dotenv").config();
const CONNECT_DB = require("./DB/connect");

// console.log(path);
const buildPath = path.join(__dirname, "../", "client", "build");

app.use(express.static(buildPath));
app.use(express.json());

app.get("/", (req, res) => {
  // this will be the homepage of the app.
  res.send("home page");
});
app.get("*"),
  (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
  };

app.use("/api", recipes);
app.use("/api/page-control", pageControl);

const PORT = process.env.PORT || 4000;
const start = async () => {
  try {
    // wait for DB connection then start server
    await CONNECT_DB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`RUNNING ON PORT: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
start();
