const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const PORT = process.env.PORT || 5010;
const app = express();

app.use(express());
app.use(cors());

const connexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "beniebeni",
  database: "MyPortfolioDB",
});

connexion.connect((err) => {
  if (err) {
    return console.error("error is detected");
  }
  console.log("success");
});

app.get();
//app.get();
app.put();
app.delete();
app.post();

app.listen(PORT, () => {
  console.log("server is running");
});
