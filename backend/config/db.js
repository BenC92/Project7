
const mysql = require('mysql2');
const dotenv = require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER, 
  database: 'groupomania',
  password: process.env.DB_PASS,
  port: 3300
});

 
module.exports = pool.promise( console.log("DB connection"));
