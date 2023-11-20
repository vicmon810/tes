const express = require("express");
const cors = require("cors");
const propertyRoutes = require("./p_route"); // Adjust the path as necessary
const app = express();
const port = 8080;

// Middleware
app.use(express.json());
app.use(express.static("public")); // Serve static files
app.use(cors({ origin: "http://localhost:3000" })); // Enable CORS

// Use the property routes
app.use("/api", propertyRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
