-- Your code here

SELECT tools.name, tools.price, purchases.quantity FROM purchases
INNER JOIN tools ON tools.id = purchases.tool_id
WHERE tools.name LIKE "Pipe%"
ORDER BY tools.name, purchases.quantity;