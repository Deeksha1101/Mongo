const express = require("express");

const app = express();
// const mongoose = require("mongoose");

const authorRouter = require("./routes/authorRouter");

app.use(express.json());

const db = require("./database/db");
const port = "3000";

app.use("/authors", authorRouter);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
