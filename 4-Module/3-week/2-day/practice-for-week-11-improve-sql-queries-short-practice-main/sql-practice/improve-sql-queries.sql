----------
-- Step 0 - Create a Query 
----------
-- Query: Select all cats that have a toy with an id of 5

    -- Your code here
    -- SELECT * FROM cats
    -- INNER JOIN cat_toys ON cats.id = cat_toys.cat_id
    -- INNER JOIN toys ON toys.id = cat_toys.toy_id
    -- WHERE toys.id = 5;

-- Paste your results below (as a comment):

-- 4002|Rachele|Maroon|Foldex Cat|4509|4002|5|5|Shiny Mouse|Blue|7
-- 31|Rodger|Lavender|Oregon Rex|10008|31|5|5|Shiny Mouse|Blue|7
-- 77|Jamal|Orange|Sam Sawet|10051|77|5|5|Shiny Mouse|Blue|7

----------
-- Step 1 - Analyze the Query
----------
-- Query:

    -- EXPLAIN QUERY PLAN
    -- SELECT * FROM cats
    -- INNER JOIN cat_toys ON cats.id = cat_toys.cat_id
    -- INNER JOIN toys ON toys.id = cat_toys.toy_id
    -- WHERE toys.id = 5;

-- Paste your results below (as a comment):

-- QUERY PLAN
-- |--SEARCH toys USING INTEGER PRIMARY KEY (rowid=?) -- log n
-- |--SCAN cat_toys -- o(n)
-- `--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?) -- log n

-- What do your results mean?

    -- Was this a SEARCH or SCAN?
    -- it was both a search and a scan

    -- What does that mean?
    -- it means that when the database was searching on the toys it used a search
    -- then it used a scan on the joins table cat_toys
    -- it used a search on cats

    -- o(n)

----------
-- Step 2 - Time the Query to get a baseline
----------
-- Query (to be used in the sqlite CLI):

    -- .timer on
    -- EXPLAIN QUERY PLAN
    -- SELECT * FROM cats
    -- INNER JOIN cat_toys ON cats.id = cat_toys.cat_id
    -- INNER JOIN toys ON toys.id = cat_toys.toy_id
    -- WHERE toys.id = 5;
    -- .timer off

-- Paste your results below (as a comment):

-- Run Time: real 0.001 user 0.000105 sys 0.000013

----------
-- Step 3 - Add an index and analyze how the query is executing
----------

-- Create index:

    -- CREATE INDEX cat_toys_index_toy_id ON cat_toys(toy_id);

-- Analyze Query:
    -- Your code here

-- Paste your results below (as a comment):


-- Analyze Results:

----------
-- Step 4 - Re-time the query using the new index
----------
-- Query (to be used in the sqlite CLI):

    EXPLAIN QUERY PLAN
    SELECT * FROM cats
    INNER JOIN cat_toys ON cats.id = cat_toys.cat_id
    INNER JOIN toys ON toys.id = cat_toys.toy_id
    WHERE toys.id = 5;

-- Paste your results below (as a comment):


-- Analyze Results:
    -- Are you still getting the correct query results?

    -- QUERY PLAN
    -- |--SEARCH toys USING INTEGER PRIMARY KEY (rowid=?)
    -- |--SEARCH cat_toys USING INDEX cat_toys_index_toy_id (toy_id=?)
    -- `--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)

    -- Did the execution time improve (decrease)?
    -- Execution did improve
    -- Run Time: real 0.001 user 0.000075 sys 0.000006

    -- Do you see any other opportunities for making this query more efficient?


---------------------------------
-- Notes From Further Exploration
---------------------------------