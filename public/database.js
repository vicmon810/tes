const sql = require("mssql");

// Assuming you have these environment variables set
const config = {
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
  server: process.env.SQL_SERVER,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: process.env.SQL_ENCRYPT === "true", // Use boolean true/false here
    trustServerCertificate: true, // Change to false for production
  },
};

// Async function to connect to the database
async function connectToDatabase() {
  try {
    await sql.connect(config);
    console.log("Connected to the SQL database");
  } catch (err) {
    console.error("Database connection failed", err);
  }
}

connectToDatabase();
