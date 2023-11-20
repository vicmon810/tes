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

    const checkQuery =
      "SELECT COUNT(1) FROM property_temp WHERE property_ID = @property_ID";
    const deleteQuery =
      "DELETE FROM property_temp WHERE property_ID = @property_ID";
    const insertQuery =
      "INSERT INTO property_temp (property_ID, strees, city, country, date_build, current_owner, price) VALUES (@property_ID, @strees, @city, @country, @date_build, @current_owner, @price)";

    const request = new pool.Request();
    request.input("property_ID", pool.VarChar, property_ID);

    // Check if the record exists
    const checkResult = await request.query(checkQuery);
    if (checkResult.recordset[0][""] > 0) {
      // Record exists, delete it
      await request.query(deleteQuery);
    }

    // Insert the new record
    request.input("strees", pool.VarChar, strees);
    request.input("city", pool.VarChar, city);
    request.input("country", pool.VarChar, country);
    request.input("date_build", pool.Date, date_build);
    request.input("current_owner", pool.VarChar, current_owner);
    request.input("price", pool.VarChar, price);
    await request.query(insertQuery);

    res.send("Property entry updated successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error while updating property entry");
  }
});

module.exports = router;
