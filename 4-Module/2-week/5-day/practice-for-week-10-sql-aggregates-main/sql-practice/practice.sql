-- STEP 1: COUNT

SELECT COUNT(*) FROM cats;

-- STEP 2: MIN/MAX

SELECT MIN(birth_year), name FROM cats;
SELECT MAX(birth_year), name FROM cats;

-- Not possible to query both in one SIMPLE Select

SELECT MIN(birth_year), name, MAX(birth_year), name FROM cats;