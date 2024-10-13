// database/dbConnection.js
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./university.db", (err) => {
  if (err) {
    console.error("Error connecting to the database", err);
  } else {
    console.log("Connected to the university database");
  }
});

module.exports = db;
// models/universityModel.js
const db = require("../database/dbConnection");

class University {
  static getDetails(callback) {
    db.get("SELECT name, address FROM university", (err, row) => {
      if (err) {
        console.error(err);
        callback(err, null);
      } else {
        callback(null, row);
      }
    });
  }
}

module.exports = University;
