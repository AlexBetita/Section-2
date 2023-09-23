-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = On;
DROP TABLE IF EXISTS instruments;
DROP TABLE IF EXISTS musicians;
DROP TABLE IF EXISTS bands;

CREATE TABLE bands (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(100)
);

CREATE TABLE musicians (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  band_id INTEGER,
  FOREIGN KEY (band_id) REFERENCES bands(id)
);

CREATE TABLE instruments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type VARCHAR(100) NOT NULL
);


INSERT INTO bands (name)
VALUES
('Alexs band');

INSERT INTO musicians (first_name, last_name, band_id)
VALUES
('Alex', 'Betita', 1);

INSERT INTO instruments (type)
VALUES
('Drums');

CREATE TABLE musicians_instruments (
  musician_id INTEGER,
  instrument_id INTEGER,
  FOREIGN KEY (musician_id) REFERENCES musicians(id),
  FOREIGN KEY (instrument_id) REFERENCES instruments(id)
);

INSERT INTO musicians_instruments (musician_id, instrument_id)
VALUES
(1,1);