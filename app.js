const express = require("express");
const app = express();
const path = require("path");

const recipes = require("./routes/recipes");

require("dotenv").config();
const CONNECT_DB = require("./DB/connect");

const buildPath = path.join(__dirname, "client", "build");

app.use(express.static(buildPath));
app.use(express.json());

app.get("/", (req, res) => {
  // this will be the homepage of the app.
  res.send("home page");
});

app.use("/api", recipes);
const port = process.env.PORT || 4000;

const start = async () => {
  try {
    // wait for DB connection then start server
    await CONNECT_DB(process.env.MONGO_URI);
    app.listen(port, console.log(`RUNNING ON PORT: ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
