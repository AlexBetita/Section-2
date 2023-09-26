-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;

-- Your code here


CREATE TABLE tools (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50),
    price DECIMAL(5,2),
    department VARCHAR(50)
);

CREATE TABLE customers(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    -- phone_number VARCHAR(12)
    phone_number INTEGER(10)
);

CREATE TABLE purchases (
    id INTEGER PRIMARY kEY AUTOINCREMENT,
    customer_id INTEGER,
    tool_id INTEGER,
    quantity INTEGER,
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE,
    FOREIGN KEY (tool_id) REFERENCES tools(id) ON DELETE CASCADE
);