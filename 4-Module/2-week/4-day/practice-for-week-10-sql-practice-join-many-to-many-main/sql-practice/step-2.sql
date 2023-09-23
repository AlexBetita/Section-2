-- Step 2
-- Just like with one-to-many relationships, you can filter one table by any
-- associated data on a conected table.
-- Your code here

SELECT musicians.first_name, musicians.last_name FROM musician_instruments
INNER JOIN musicians ON musicians.id = musician_instruments.musician_id
INNER JOIN instruments ON instruments.id = musician_instruments.instrument_id
WHERE instruments.type LIKE '%piano%';