-- Your code here

SELECT DISTINCT department FROM tools
WHERE department IS NOT Null
ORDER BY department;

-- SELECT DISTINCT department FROM tools
-- WHERE department != ''
-- ORDER BY department;