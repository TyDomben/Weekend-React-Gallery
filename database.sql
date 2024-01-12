-- TODO [x] Before you get started, add a few images to the public/images folder and modify the INSERT statement in the database.sql file to add your images to the gallery table. (You'll only need to provide url, title, and description values, because likes defaults to 0.)
-- prevent creation of a bunch of tables
drop table if exists "gallery";

-- create the table "gallery"
CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

-- insert information into "gallery" table
INSERT INTO
  "gallery" ("url", "title", "description")
VALUES
  (
    '/images/small cartoon beaver.png',
    'Beaver!',
    'Small cartoon photo of a beaver..'
  ),
  (
    '/images/small cartoon dog.png',
    'Dog!',
    'Small cartoon photo of a dog..'
  ),
  (
    '/images/small cartoon goat.png',
    'Goat!',
    'Small cartoon photo of a goat..'
  ),
  (
    '/images/small cartoon moose.png',
    'Moose!',
    'Small cartoon photo of a moose..'
  ),
  (
    '/images/small cartoon mouse.png',
    'Mouse!',
    'Small cartoon photo of a mouse..'
  ),
  (
    '/images/small cartoon scorpion.png',
    'scorpion!',
    'Small cartoon photo of a scorpion..'
  ),
  (
    '/images/small cartoon snake.png',
    'Snake!',
    'Small cartoon photo of a snake..'
  );