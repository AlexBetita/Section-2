DROP TABLE puppies;

CREATE TABLE puppies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(20),
    age_yrs NUMERIC(3,1),
    breed VARCHAR(100),
    weight_lbs INTEGER,
    microchipped BOOLEAN
);

INSERT INTO puppies
VALUES
(1, 'Maxi', 2, 'German Shephard', 20, true);