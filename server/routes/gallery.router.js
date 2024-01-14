const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");



// // !GET /gallery/:id
// // TODO [] Implement the GET /api/gallery/:id route so that it will send back the gallery item object with the matching id as its response.

// router.get("/:id", (req, res) => {
//   const galleryId = req.params.id;
//   const queryText = `SELECT * FROM "gallery" WHERE "id" = $1;`;
//   pool
//     .query(queryText, [galleryId])
//     .then((result) => {
//       res.send(result.rows[0]);
//     })
//     .catch((error) => {
//       console.log(error);
//       res.sendStatus(500);
//     });
// });

// !GET /gallery
// TODO [] Implement the GET /api/gallery route so that it will send back the array of gallery item objects as its response.

router.get("/", (req, res) => {
  const queryText = 'SELECT * FROM "gallery" ORDER BY "id";';
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

// // !POST ROUTE
// // TODO [] Implement the POST /api/gallery route so that it will insert a new gallery item into the database.

// router.post("/", (req, res) => {
//   const { path, description } = req.body;
//   const queryText = `INSERT INTO "gallery" ("path", "description") VALUES ($1, $2);`;
//   pool
//     .query(queryText, [path, description])
//     .then((result) => {
//       res.sendStatus(201);
//     })
//     .catch((error) => {
//       console.log(`Error adding new item`, error);
//       res.sendStatus(500);
//     });
// });


// PUT ROUTE
// TODO [] Implement the PUT /api/gallery/like/:id route
// TODO - so that it will increment a given gallery item's likes value by 1 and send back HTTP status code 200 as its response.
router.put("/like/:id", (req, res) => {
  console.log(req.params);
  const galleryId = req.params.id;
  const queryText = `UPDATE "gallery" SET "likes" = "likes" + 1 WHERE "id" = $1;`;
  // SQL query updating "gallery" table setting the "likes" column to itterate by one based on the id value
  pool.query(queryText, [galleryId]).then((result) => {
    res.sendStatus(200);
  });
});


module.exports = router;
