const mongoose = require("mongoose");

const url =
  "mongodb+srv://priyabhondwe12:ND30Wf65XhRKGA8y@cluster0.ixta97q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url);

const conn = mongoose.connection;

conn.on("connected", () => {
  console.log("Connected to DB");
});

conn.on("disconnected", () => {
  console.log("Disconnected from DB");
});

conn.on("error", () => {
  console.log("Could not Connected to DB");
});
