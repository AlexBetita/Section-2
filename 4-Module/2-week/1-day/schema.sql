DROP TABLE puppies;

CREATE TABLE puppies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(50),
  age_yrs NUMERIC(3,1),
  breed VARCHAR(100),
  weight_lbs INTEGER,
  microchipped BOOLEAN
);

INSERT INTO puppies
VALUES
  (1, 'Maxi', 9.0, 'German Shepard', 20, true),
  (2, 'Ahri', 14.0, 'Japanese Spitz', 8, true),
  (3, 'Zed', 3.0, 'Bulldog', 40, true);

INSERT INTO puppies
VALUES
  (4, 'Kiwi', 1.0, 'Japanese Spitz', 6, false);

-- select * from puppies;

UPDATE puppies
SET name = 'Blue'
WHERE id = 3;

-- UPDATE puppies
-- SET name = 'Blue'
-- WHERE name = 'Zed' and age_yrs < 10;

DELETE FROM puppies
WHERE id = 1;