-- Create the Orders table
CREATE TABLE Orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ProductName VARCHAR(255),
    Quantity INT,
    Price DECIMAL(10, 2)
);

-- Insert some data into the Orders table
INSERT INTO Orders  (ProductName, Quantity, Price)
VALUES 
    ('Apple', 30, 1.20),
    ('Banana', 20, 0.50),
    ('Cherry', 25, 2.00),
    ('Date', 40, 1.00),
    ('Elderberry', 30, 3.00),
    ('Fig', 15, 2.50),
    ('Grape', 35, 1.50),
    ('Honeydew', 20, 3.50);

-- COUNT
-- SUM
-- MIN
-- MAX
-- AVG
-- GROUP BY
-- HAVING

SELECT COUNT(*) FROM Orders
WHERE Quantity >= 25;

SELECT SUM(Price) FROM Orders;

SELECT SUM(Quantity) FROM Orders;

SELECT AVG(Price) FROM Orders;

SELECT AVG(Quantity) FROM Orders;

SELECT MIN(Price) FROM Orders;

SELECT MAX(Price) FROM Orders;

-- SELECT ProductName, SUM(Quantity) FROM Orders
-- HAVING SUM(Quantity) > 40;


SELECT ProductName FROM Orders
WHERE Price > (SELECT AVG(Price) FROM Orders);

INSERT INTO Orders (ProductName, Quantity, Price)
VALUES
    ('Peach', 20, (SELECT MAX(Price) FROM Orders));


INSERT INTO Orders (ProductName, Quantity, Price)
SELECT ProductName, Quantity, Price FROM Orders
WHERE ProductName = 'Apple';

INSERT INTO Orders (ProductName, Quantity, Price)
VALUES
    ('Peach', 20, (SELECT AVG(Price) FROM Orders)),
    ('Watermelon', 20,(SELECT AVG(Price) FROM Orders)),
    ('Avocado', 30,(SELECT AVG(Price) FROM Orders)),
    ('Kiwi', 40,(SELECT AVG(Price) FROM Orders));
-- alias


-- INSERT INTO Orders (ProductName, Quantity, Price)
-- SELECT ProductName, Quantity, (SELECT AVG(Price) FROM Orders)
-- FROM (
--     VALUES
--     ('Watermelon', 20),
--     ('Avocado', 30),
--     ('Kiwi', 40)
-- ) Orders;
