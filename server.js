const express = require("express");
const bodyParser = require("body-parser");

const port = 5000;

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
  return new Promise((resolve, reject) => {
    server = app
      .listen(port)
      .once("listening", () => {
        console.log(`Server is running on port ${port}`);
        resolve(server);
      })
      .once("error", (error) => {
        reject(error);
      });
  });
};

// Handle server termination
const handleServerTermination = () => {
  stopServer().then(() => {
    process.exit();
  });
};

const stopServer = async () => {
  return new Promise((resolve, reject) => {
    server.on("close", () => {
      console.log("Server has stopped.");
      resolve();
    });
    server.close((error) => {
      if (error) {
        console.log(`There was a problem stopping the server: ${error}`);
        reject(error);
      }
    });
  });
};

// Start the server if running as the main module
if (require.main === module) {
  startServer();

  // Handle SIGINT and SIGTERM signals for graceful termination
  process.on("SIGINT", handleServerTermination);
  process.on("SIGTERM", handleServerTermination);
}

module.exports = { startServer, stopServer };
