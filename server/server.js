const express = require("express");
const pool = require("./database"); // Import your database configuration
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public")); // Serve static files

app.get("/", async (req, res) => {
  try {
    console.log("hello");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

async function testDBConnection() {
  try {
    await sql.connect(config);
    const result = await sql.query("SELECT 1 AS number");
    console.log("Database connected. Result:", result.recordset[0].number);
    await sql.close();
  } catch (err) {
    console.error("Database connection error:", err);
  }
}

testDBConnection();

// Endpoint to get users
app.get("/api/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error sql fail!");
  }
});

// Endpoint to get properties
app.get("/api/properties", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM property_o ;");
    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
