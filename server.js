// Import required modules
const express = require("express");
const bodyParser = require("body-parser");

// Create an instance of Express
const app = express();
let server;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define routes
app.get("/hello", (req, res) => {
  const data = {
    message: "Hello, World!",
  };
  res.json(data);
});

const startServer = async () => {
  const port = 5000;

  server = await new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
      resolve(server);
    });
  });
};

const stopServer = async () => {
  return new Promise((resolve, reject) => {
    server.close(() => {
      console.log("Server has stopped.");
      resolve();
    });
  });
};

if (require.main === module) {
  startServer();

  process.on("SIGINT", async () => {
    await stopServer();
    process.exit();
  });

  process.on("SIGTERM", async () => {
    await stopServer();
    process.exit();
  });
}

module.exports = { startServer, stopServer };
