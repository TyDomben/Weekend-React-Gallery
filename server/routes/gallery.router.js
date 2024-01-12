const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");


// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
});

// GET /gallery
// TODO Implement the GET /api/gallery route so that it will send back the array of gallery item objects as its response.

router.get('/', (req, res) => {
  // code here
});

// PUT ROUTE
// TODO Implement the PUT /api/gallery/like/:id route 
// TODO - so that it will increment a given gallery item's likes value by 1 and send back HTTP status code 200 as its response.



module.exports = router;
