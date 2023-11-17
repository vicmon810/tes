const { Pool } = require("pg"); // or the equivalent for your database

const pool = new Pool({
  user: "sa",
  host: "localhost",
  database: "property",
  password: "reallyStrongPwd123",
  port: 8080,
});

console.log(pool);

module.exports = pool;
