-- Your code here

INSERT INTO tools (name, price, department)
VALUES
    ('Snow shovel', 16.50, 'Home & Garden'), -- 1
    ('Work light', 29.99, 'Electrical'), -- 2
    ('Wheelbarrow', 89.99, 'Home & Garden'), -- 3
    ('Pipe Wrench', 18.99, 'Plumbing'), -- 4
    ('Pipe Cutter', 36.36, 'Plumbing'), -- 5
    ('Rake', 15.45, 'Home & Garden'), -- 6
    ('Women''s Gloves', 8.39, 'Home & Garden'), -- 7
    ('Men''s Gloves', 8.39, 'Home & Garden'); -- 8

INSERT into customers (first_name, last_name, phone_number)
VALUES
    ('John', 'Smith', 1111111111),
    ('Jane', 'Doe', 2222222222);

INSERT into purchases (customer_id, tool_id, quantity)
VALUES
    -- 1
    (1, 2, 1),
    (1, 5, 2),
    -- 2
    (2, 1, 3),
    (2, 2, 1),
    (2, 7, 1),
    (2, 4, 1),
    (2, 5, 1),
    -- 3
    (1, 3, 3),
    (1, 8, 2);



-- INSERT into purchases (customer_id, tool_id, quantity)
-- VALUES
--     ((SELECT customers.id FROM customers WHERE customers.first_name = 'John'),
--      (SELECT tools.id FROM tools WHERE tools.name = 'Work light'),
--      1),

--     ((SELECT customers.id FROM customers WHERE customers.first_name = 'John'),
--      (SELECT tools.id FROM tools WHERE tools.name = 'Pipe Cutter'),
--      2);

-- INSERT into purchases (customer_id, tool_id, quantity)
-- VALUES
--     ((SELECT customers.id FROM customers WHERE customers.first_name = 'Jane'),
--      (SELECT tools.id FROM tools WHERE tools.name = 'Snow shovel'),
--      3),
--     ((SELECT customers.id FROM customers WHERE customers.first_name = 'Jane'),
--      (SELECT tools.id FROM tools WHERE tools.name = 'Work light'),
--      1),
--     ((SELECT customers.id FROM customers WHERE customers.first_name = 'Jane'),
--      (SELECT tools.id FROM tools WHERE tools.name = 'Women''s Gloves'),
--      1),
--     ((SELECT customers.id FROM customers WHERE customers.first_name = 'Jane'),
--      (SELECT tools.id FROM tools WHERE tools.name = 'Pipe Wrench'),
--      1),
--     ((SELECT customers.id FROM customers WHERE customers.first_name = 'Jane'),
--      (SELECT tools.id FROM tools WHERE tools.name = 'Pipe Cutter'),
--      1);


-- INSERT into purchases (customer_id, tool_id, quantity)
-- VALUES
--     ((SELECT customers.id FROM customers WHERE customers.first_name = 'John'),
--      (SELECT tools.id FROM tools WHERE tools.name = 'Wheelbarrow'),
--      3),
--     ((SELECT customers.id FROM customers WHERE customers.first_name = 'John'),
--      (SELECT tools.id FROM tools WHERE tools.name = 'Men''s Gloves'),
--      2);