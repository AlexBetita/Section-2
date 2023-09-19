DROP TABLE IF EXISTS puppies;

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
(1, 'Maxi', 12, 'German Shepard', 20, true),
(2, 'Ahri', 16, 'Japanese Spitz', 8, true),
(3, 'Zed', 5, 'Bulldog', 40, true);

-- SELECT * FROM puppies;

-- SELECT breed FROM puppies;

-- SELECT * FROM puppies
-- WHERE name = 'Maxi';

UPDATE puppies
SET age_yrs = 6
WHERE id = 3;

DELETE FROM puppies
WHERE name = 'Maxi';