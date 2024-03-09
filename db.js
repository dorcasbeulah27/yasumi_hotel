const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://dorcas:godluvsme@cluster0.ehzskgk.mongodb.net/yasumi";
mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var connection = mongoose.connection;
connection.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

connection.on("connected", () => {
  console.log(" Database connection is successfull");
});

module.exports = mongoose;
