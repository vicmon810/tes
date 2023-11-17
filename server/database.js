const sql = require("mssql");

const config = {
  user: "sa",
  password: "reallyStrongPwd123",
  database: "property",
  server: "localhost", // Replace with your Azure SQL Database server name
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false, // Required for Azure SQL
    trustServerCertificate: false, // Change to true for local dev / self-signed certificates
  },
};

async function connect() {
  try {
    await sql.connect(config);
    console.log("Connected to the database.");
  } catch (err) {
    console.error("Failed to connect to the database:", err);
  }
}

connect();

module.exports = sql; // Export the sql object with the connected pool
