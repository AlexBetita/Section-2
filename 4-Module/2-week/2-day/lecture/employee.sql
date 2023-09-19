CREATE TABLE Employees (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Email VARCHAR(100),
    Age INT,
    Position VARCHAR(50),
    Salary DECIMAL(10, 2),
    DateJoined DATE
);

INSERT INTO Employees (ID, FirstName, LastName, Email, Age, Position, Salary, DateJoined)
VALUES
(1, 'John', 'Doe', 'john.doe@example.com', 30, 'Manager', 60000.00, '2023-01-01'),
(2, 'Jane', 'Smith', 'jane.smith@example.com', 28, 'Developer', 50000.00, '2023-03-15'),
(3, 'Bob', 'Johnson', 'bob.johnson@example.com', 34, 'Designer', 45000.00, '2023-04-20'),
(4, 'Alice', 'Davis', 'alice.davis@example.com', 29, 'Analyst', 48000.00, '2023-05-10'),
(5, 'Charlie', 'Wilson', 'charlie.wilson@example.com', 27, 'Developer', 50000.00, '2023-06-01'),
(6, 'David', 'Taylor', 'david.taylor@example.com', 33, 'Tester', 42000.00, '2023-07-19'),
(7, 'Emily', 'Anderson', 'emily.anderson@example.com', 32, 'Manager', 60000.00, '2023-08-05'),
(8, 'Frank', 'Thomas', 'frank.thomas@example.com', 36, 'Designer', 45000.00, '2023-09-12'),
(9, 'Grace', 'Jackson', 'grace.jackson@example.com', 31, 'Analyst', 48000.00, '2023-10-01'),
(10, 'Henry', 'White', 'henry.white@example.com', 29, 'Tester', 42000.00, '2023-11-15');