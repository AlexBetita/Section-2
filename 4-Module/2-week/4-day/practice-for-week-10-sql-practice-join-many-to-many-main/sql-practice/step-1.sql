-- Step 1
-- Connecting both sides of a many-to-many relationship involves JOINing the
-- join table on to one side of the relationship, then JOINing the other side
-- on to the join table.
-- Your code here

SELECT musicians.first_name, instruments.type FROM musician_instruments
INNER JOIN musicians ON musicians.id = musician_instruments.musician_id
INNER JOIN instruments ON instruments.id = musician_instruments.instrument_id;



-- SELECT musicians.first_name, instruments.type FROM musician_instruments
-- INNER JOIN instruments ON instruments.id = musician_instruments.instrument_id
-- INNER JOIN musicians ON musicians.id = musician_instruments.musician_id;

-- SELECT musicians.first_name, instruments.type FROM musician_instruments
-- INNER JOIN instruments ON musician_instruments.instrument_id = instruments.id
-- INNER JOIN musicians ON musician_instruments.musician_id = musicians.id
-- INNER JOIN bands ON musicians.id = bands.musician_id;