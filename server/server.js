const express = require("express");
const pool = require("./database"); // Import your database configuration
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public")); // Serve static files

// Endpoint to get users
app.get("/api/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Endpoint to get properties
app.get("/api/properties", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM property_o");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
