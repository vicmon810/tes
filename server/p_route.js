const express = require("express");
const pool = require("./database"); // Ensure this path is correct
const router = express.Router();

// Handler to get a single property's information
router.get("/property/:id", async (req, res) => {
  try {
    const propertyId = req.params.id;
    const result = await pool.query("SELECT * FROM properties WHERE id = $1", [
      propertyId,
    ]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error while fetching property");
  }
});

// Handler to get all properties
router.get("/property", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM property_o");
    // console.log(result);
    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error while fetching properties");
  }
});

// Handler to create a new entry in property_temp table
router.post("/property", async (req, res) => {
  try {
    const {
      property_ID,
      strees,
      city,
      country,
      date_build,
      current_owner,
      price,
    } = req.body;
    console.log();
    const request = new pool.Request();

    request.input("property_ID", pool.VarChar, property_ID);
    request.input("strees", pool.VarChar, strees);
    request.input("city", pool.VarChar, city);
    request.input("country", pool.VarChar, country);
    request.input("date_build", pool.Date, date_build);
    request.input("current_owner", pool.VarChar, current_owner);
    request.input("price", pool.VarChar, price);

    request
      .query(
        "INSERT INTO property_temp (property_ID, strees, city, country, date_build, current_owner, price) VALUES (@property_ID, @strees, @city, @country, @date_build, @current_owner, @price)"
      )
      .then((result) => {
        console.log("Query executed successfully");
        pool.close(); // Close the connection pool when done
      });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error while creating new property entry");
  }
});

module.exports = router;
