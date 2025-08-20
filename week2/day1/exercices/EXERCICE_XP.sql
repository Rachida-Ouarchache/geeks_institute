
CREATE DATABASE public;


-- Create items table
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name_item VARCHAR(50),
    price_item INT
);

-- Create customers table
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(50),
    lastname VARCHAR(50)
);

-- Insert items
INSERT INTO items (name_item, price_item) VALUES
('Small Desk', 100),
('Large Desk', 300),
('Fan', 80);

-- Insert customers
INSERT INTO customers (firstname, lastname) VALUES
('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson');

select * from customers, items;

SELECT * FROM items
WHERE price_item > 80;

SELECT * FROM items
WHERE price_item <= 300;

SELECT * FROM customers
WHERE lastname = 'Smith';

SELECT * FROM customers
WHERE lastname = 'Jones';

SELECT * FROM customers
WHERE firstname <> 'Scott';
