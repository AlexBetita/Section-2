-- PHASE 1: Replace JOIN query with subquery

SELECT * FROM toys
WHERE cat_id = (SELECT id FROM cats WHERE name = 'Garfield');

-- SELECT toys.id, toys.name, toys.cat_id FROM cats
-- INNER JOIN toys ON cats.id = toys.cat_id
-- WHERE cats.name = 'Garfield';

INSERT INTO toys (cat_id, name)
VALUES
((SELECT id FROM cats WHERE name = 'Garfield'), 'Pepperoni');