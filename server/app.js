const express = require("express");
// const mongoose = require('mongoose');

const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config({
  path: "./config/.env",
});

const app = express();

app.use(cors());
app.use(express.static("uploads"));
app.use(bodyParser.json());
app.use((req, res, next) => {
  // console.log("req.body..", req.body);
  //access client to access the "x-token" to header
  res.header("Access-Control-Expose-Headers", "x-accesstoken,x-refreshtoken");
  next();
});

const port = process.env.PORT || 1010;

// http://localhost:1010/api/v1
app.use("/api/v1", require("./v1"));

app.get("/", (req, res) => {
  res.status(200).send("welcome to sever");
});

app.listen(port, () => {
  console.log(`server is listing on port ${port}`);
});
