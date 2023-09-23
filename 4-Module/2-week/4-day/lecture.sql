PRAGMA foreign_keys = On;

DROP TABLE IF EXISTS Comments;
DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    UserName VARCHAR(50)
);

CREATE TABLE Comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Comment VARCHAR(50),
    UserId INT,
    FOREIGN KEY (UserId) REFERENCES Users(id) ON DELETE CASCADE
);

INSERT INTO Users (UserName)
VALUES
('John'),
('Mary'),
('Alex'),
('Kate');

INSERT INTO Comments (Comment, UserId)
VALUES
('Great place!', 1),
('10/10 would come here again!', 2),
('Poor customer service but afforadable.', 3),
('Pets allowed.', 4),
('Excellent service.', 3),
('Has wifi.', 3),
('Has extra beds and sheets.', 1);


CREATE TABLE puppies (
  name VARCHAR(50),
  age_yrs NUMERIC(3,1),
  breed VARCHAR(100),
  weight_lbs INTEGER,
  microchipped BOOLEAN
);

INSERT INTO puppies
VALUES
  ('Cooper', 1, 'Miniature Schnauzer', 18, 1),
  ('Indie', 0.5, 'Yorkshire Terrier', 13, 1),
  ('Kota', 0.7, 'Australian Shepherd', 26, 0),
  ('Zoe', 0.8, 'Korean Jindo', 32, 1),
  ('Charley', 1.5, 'Basset Hound', 25, 0),
  ('Ladybird', 0.6, 'Labradoodle', 20, 1),
  ('Callie', 0.9, 'Corgi', 16, 0),
  ('Jaxson', 0.4, 'Beagle', 19, 1),
  ('Leinni', 1, 'Miniature Schnauzer', 25, 1),
  ('Max', 1.6, 'German Shepherd', 65, 0);

-- -- SELECT name, breed FROM puppies
-- --   WHERE breed = 'Miniature Schnauzer';

-- BETWEEN
-- IN

-- SELECT name, breed FROM puppies
-- WHERE breed IN ('Miniature Schnauzer', 'German Shepherd', 'Corgi');

-- SELECT UserName FROM users
-- WHERE id IN (1,2,4,6);

-- SELECT name, breed FROM puppies
-- WHERE weight_lbs BETWEEN 20 AND 65;

-- ORDER BY

-- default is ASC
-- DESC

-- SELECT name, breed FROM puppies
-- WHERE weight_lbs BETWEEN 20 AND 65
-- ORDER BY name;

-- LIMIT
-- OFFSET
-- PAGINATION

-- SELECT * FROM puppies
-- LIMIT 5 OFFSET 5;

-- LIKE

-- SELECT name, breed FROM puppies
-- WHERE name LIKE 'Max';

-- SELECT name, breed FROM puppies
-- WHERE name LIKE '%a';

-- SELECT name, breed FROM puppies
-- WHERE name LIKE 'c%';

-- SELECT name, breed FROM puppies
-- WHERE name LIKE 'Ca%';

-- SELECT name, breed FROM puppies
-- WHERE name LIKE '%ax%';

-- SELECT name, breed, age_yrs FROM puppies
--   WHERE age_yrs * 10 = 6;