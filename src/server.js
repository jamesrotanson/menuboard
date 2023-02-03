const express = require("express");
const mysql = require("mysql2");

const app = express();

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: "user",
  password: "password",
  database: "database_name"
});

process.on('uncaughtException', function (err) {
  console.log(err);
}); 

app.get("/recipes", (req, res) => {
  connection.query("SELECT * FROM recipes", (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});