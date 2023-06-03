// Import required modules
const express = require("express");
const bodyParser = require("body-parser");

// Create an instance of Express
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
