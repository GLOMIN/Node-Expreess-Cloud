require('dotenv').config();

const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
<<<<<<< HEAD
  res.send("hello js");
=======
  res.send("hello world");
>>>>>>> cc0911014a59671bb6439754e7cd2ae8cd8dd4bc
});

app.listen(port, () => {
  console.log(`Example app listen at http://localhost:${port}`);
});
