-- Your code here

SELECT customers.first_name, customers.last_name, customers.phone_number
FROM customers
INNER JOIN purchases ON customers.id = purchases.customer_id
INNER JOIN tools ON tools.id = purchases.tool_id
WHERE tools.name = 'Pipe Cutter'
ORDER BY customers.id DESC
LIMIT 1;


-- SELECT customers.first_name, customers.last_name, customers.phone_number
-- FROM customers
-- INNER JOIN purchases ON customers.id = purchases.customer_id
-- INNER JOIN tools ON tools.id = purchases.tool_id
-- WHERE tools.name = 'Wheelbarrow';