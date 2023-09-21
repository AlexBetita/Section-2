DROP TABLE Orders;
DROP TABLE Customers;

CREATE TABLE Customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    CustomerName VARCHAR(50)
);

CREATE TABLE Orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    OrderNumber INT,
    CustomerId INT,
    FOREIGN KEY (CustomerId) REFERENCES Customers(id)
);

-- CREATE TABLE <<table_name>> (
--     <<foreign_key_property>>,
--     FOREIGN KEY <<foreign_key_property>> REFERENCES <<foreign_table>>(<<id_property>>)
-- );

INSERT INTO Customers (CustomerName)
VALUES
('John'),
('Mary'),
('Alex'),
('Kate');


INSERT INTO Orders (OrderNumber, CustomerId)
VALUES
(0001, 1),
(0002, 2),
(0003, 3),
(0004, 4),
(0005, 3),
(0006, 3),
(0007, 1);


-- SELECT * FROM Customers
-- INNER JOIN Orders ON Orders.CustomerId = Customers.id;

-- SELECT * FROM Customers
-- INNER JOIN Orders ON Orders.CustomerId = Customers.id
-- WHERE Customers.CustomerName = "Alex";


DROP TABLE IF EXISTS Comments;
DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    UserName VARCHAR(50)
);

CREATE TABLE Comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Comment VARCHAR(50),
    UserId INT,
    FOREIGN KEY (UserId) REFERENCES Users(id)
);

INSERT INTO Users (UserName)
VALUES
('John'),
('Mary'),
('Alex'),
('Kate');


INSERT INTO Comments (Comment, UserId)
VALUES
('Great place!', 1),
('10/10 would come here again!', 2),
('Poor customer service but afforadable.', 3),
('Pets allowed.', 4),
('Excellent service.', 3),
('Has wifi.', 3),
('Has extra beds and sheets.', 1);

SELECT Users.UserName, Comments.comment FROM Comments
INNER JOIN Users ON Users.id = Comments.UserId
WHERE Users.UserName = 'Alex';

-- -- SELECT * FROM Users
-- -- INNER JOIN Comments ON Comments.UserId = Users.id
-- -- WHERE Users.UserName = "Alex";

CREATE TABLE Students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    StudentName VARCHAR(50)
);
CREATE TABLE Courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Course VARCHAR(50)
);
-- joins table m-m relationship
CREATE TABLE Enrollments (
    StudentId INTEGER,
    CourseId INTEGER,
    FOREIGN KEY (StudentId) REFERENCES Students(id),
    FOREIGN KEY (CourseId) REFERENCES Courses(id)
);

INSERT INTO Students (StudentName)
VALUES
('John'),
('Mary'),
('Alex'),
('Kate');

INSERT INTO Courses (Course)
VALUES
('Math'),
('Science'),
('English'),
('Art');

INSERT INTO Enrollments (StudentId, CourseId)
VALUES
(1,1),
(1,2),
(1,3),
(1,4),
(2,3),
(2,4),
(3,1),
(4,1),
(4,2),
(4,4);

SELECT Students.StudentName, Courses.Course FROM Enrollments
INNER JOIN Courses ON Courses.id = Enrollments.CourseId
INNER JOIN Students ON Students.id = Enrollments.StudentId
WHERE Students.StudentName = 'John';

DELETE FROM Enrollments
WHERE StudentId = 1 and CourseId = 1;

UPDATE Enrollments
SET CourseId = 3
WHERE StudentId = 3 and CourseId = 1;

SELECT Students.StudentName, Courses.Course FROM Enrollments
INNER JOIN Courses ON Courses.id = Enrollments.CourseId
INNER JOIN Students ON Students.id = Enrollments.StudentId
WHERE Students.StudentName = 'Alex';

DELETE FROM Enrollments
WHERE StudentId = 1;

-- SELECT Students.StudentName, Courses.course FROM Enrollments
-- INNER JOIN Courses ON Courses.id = Enrollments.CourseId
-- INNER JOIN Students ON Students.id = Enrollments.StudentId;

-- SELECT Students.StudentName, Courses.course FROM Enrollments
-- INNER JOIN Courses ON Courses.id = Enrollments.CourseId
-- INNER JOIN Students ON Students.id = Enrollments.StudentId
-- WHERE Students.id = 1;

-- DELETE FROM Enrollments
-- WHERE StudentId = 1 and CourseId = 3;

-- UPDATE Enrollments
-- SET CourseId = 2;
-- WHERE StudentId = 3 and CourseId = 1;