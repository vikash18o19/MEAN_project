const path = require("path");
const connectDB = require("./handler/DbConnect");
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to the server for MEAN application");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
