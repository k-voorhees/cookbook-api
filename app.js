const express = require("express");
const app = express();

const recipes = require("./routes/recipes");

require("dotenv").config();
const CONNECT_DB = require("./DB/connect");

app.use(express.json());

app.use("/api", recipes);

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
