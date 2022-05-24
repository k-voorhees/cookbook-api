const express = require("express");
const app = express();

const recipes = require("./routes/recipes");
const pageControl = require("./routes/control");

require("dotenv").config();
const CONNECT_DB = require("./DB/connect");

app.use(express.json());

app.get("/", (req, res) => {
  // this will be the homepage of the app.
  res.send("home page");
});

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
