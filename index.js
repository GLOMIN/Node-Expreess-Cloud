require('dotenv').config();

const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello js");
});

app.listen(port, () => {
  console.log(`Example app listen at http://localhost:${port}`);
});
