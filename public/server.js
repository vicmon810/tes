const express = require("express");
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static("public")); // Make sure your HTML, CSS, and JS files are in a directory named 'public'

app.get("/data", (req, res) => {
  // Here, you should integrate your database logic
  // For now, let's just send a dummy response
  res.json({ message: "Data from the server" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
