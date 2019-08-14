// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "icopoghru9oezxh8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "gtu6nb98qqetijte",
  password: "i9a593oz2wuqj1jr",
  database: "d2yx0uzceilor98q",
  use_env_variable: "JAWSDB_URL",
  dialect: "mysql"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;