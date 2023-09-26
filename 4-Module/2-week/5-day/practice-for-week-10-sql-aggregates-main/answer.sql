WITH 
    Oldest AS (
        SELECT name, birth_year 
        FROM cats 
        ORDER BY birth_year ASC 
        LIMIT 1
    ),
    Youngest AS (
        SELECT name, birth_year 
        FROM cats 
        ORDER BY birth_year DESC 
        LIMIT 1
    )
SELECT * FROM Oldest
UNION ALL
SELECT * FROM Youngest;


-- SELECT 
--     CASE WHEN birth_year = MIN(birth_year) THEN 'Oldest' 
--          WHEN birth_year = MAX(birth_year) THEN 'Youngest' 
--     END AS Age_Category,
--     name,
--     birth_year
-- FROM
--     cats
-- WHERE
--     birth_year IN (SELECT MIN(birth_year) FROM cats UNION ALL SELECT MAX(birth_year) FROM cats);
