// Import the Express module and create a router
const express = require("express");
const router = express.Router();

// Import the pool module for database connection
const pool = require("../modules/pool.js");

/**
 * GET Route: Fetch a single gallery item by its ID
 * !Path: /api/gallery/:id
 * Description: Retrieves the gallery item that matches the provided ID from the database
 * and sends it back in the response.
 */
router.get("/:id", (req, res) => {
  // Extract the gallery ID from the request parameters
  const galleryId = req.params.id;

  // SQL query to select the gallery item that matches the given ID
  const queryText = `SELECT * FROM "gallery" WHERE "id" = $1;`;

  // Execute the query and handle the result or error
  pool
    .query(queryText, [galleryId])
    .then((result) => {
      // Send the first row (the matched gallery item) as the response
      res.send(result.rows[0]);
    })
    .catch((error) => {
      // Log the error and send a 500 Internal Server Error status
      console.log(error);
      res.sendStatus(500);
    });
});

/**
 * GET Route: Fetch all gallery items
 * !Path: /api/gallery
 * Description: Retrieves all gallery items from the database and sends them back in an array.
 */
router.get("/", (req, res) => {
  // SQL query to select all gallery items, ordered by their ID
  const queryText = 'SELECT * FROM "gallery" ORDER BY "id";';

  // Execute the query and handle the result or error
  pool
    .query(queryText)
    .then((result) => {
      // Send the array of gallery items as the response
      res.send(result.rows);
    })
    .catch((error) => {
      // Log the error and send a 500 Internal Server Error status
      console.log(error);
      res.sendStatus(500);
    });
});

// Export the router for use in other modules
module.exports = router;
