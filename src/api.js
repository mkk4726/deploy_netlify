const express = require("express");
const serverless = require("serverless-http");

// Create an instance of the Express app
const app = express();

// Create a router to handle routes
const router = express.Router();

// Define a route that responds with a JSON object when a GET request is made to the root path
router.get("/", (req, res) => {
  res.json({
    hello: "hi!"
  });
});

// Use the router to handle requests to the `/.netlify/functions/api` path
app.use(`/.netlify/functions/api`, router);
app.get('/', (req, res)=>{
  res.send(`
  <!doctype html>
  <html>
  <head>
    <title>WEB2</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1>WEB</h1>
  </body>
  </html>`);
})

// Export the app and the serverless function
module.exports = app;
module.exports.handler = serverless(app);