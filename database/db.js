const mongoose = require("mongoose");

const password = encodeURIComponent("meghalaya@11");

const url = `mongodb+srv://dikshakhattar218:${password}@cluster0.q2dfm.mongodb.net/sample_airbnb?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); //asnchronous

const dbConn = mongoose.connection;

dbConn.on("error", console.error.bind(console, "Connection Error")); //onclick of js == .on of mongoose

dbConn.on("open", function () {
  console.log("DB Connection Successful");
});

module.exports = dbConn;
