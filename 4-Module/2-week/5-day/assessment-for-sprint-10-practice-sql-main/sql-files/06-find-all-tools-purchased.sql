-- Your code here

SELECT tools.name, purchases.quantity FROM purchases
INNER JOIN tools ON tools.id = purchases.tool_id
ORDER BY tools.name, purchases.quantity;