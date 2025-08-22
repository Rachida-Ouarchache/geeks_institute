-- 1
SELECT COUNT(rating) AS number_of_films FROM film GROUP BY rating;
-- 2
SELECT rating From film WHERE rating = 'G' OR rating ='PG-13';
 -- 1
 SELECT title, length, rental_rate, rating
 FROM film
 WHERE length < 120 AND rental_rate < 3.00
 ORDER BY title ASC;
-- 3
UPDATE customer 
SET 
   first_name = 'Rachida',
   last_name = 'Ouarhache',
   email='rachidaouarhache@gmail.com' 
WHERE
   customer_id = 5;     
-- 4
UPDATE address 
SET 
    address = 'hay nassim'
WHERE
    address_id = 5;
	
	SELECT address FROM address where address_id = 5

-- Exercice 2
UPDATE students
SET birth_day = '02/11/1998'
WHERE first_name = 'Lea' AND last_name = 'Benichou'
   OR first_name = 'Marc' AND last_name = 'Benichou';

 -- 2
 UPDATE students
 SET 
   last_name ='Guez'
 WHERE 
   last_name = 'Gez';
-- DELETE
 -- 1
DELETE FROM students 
WHERE 
   first_name = 'lea' AND
   last_name = 'Benichou';
-- COUNT
  -- 1
SELECT count(*) FROM students;
  -- 2
SELECT COUNT(*) FROM students WHERE birth_day > '1/01/2000'
-- insert / Alter 
 -- 1
ALTER TABLE students
ADD COLUMN math_grade INT;
 -- 2
 UPDATE students
SET math_grade = 80
WHERE id = 1;
 -- 3
UPDATE students
SET math_grade = 90
WHERE id IN (2, 4);
 -- 4
UPDATE students
SET math_grade = 40
WHERE id = 6;
 -- 5
SELECT COUNT(*) AS students_above_83
FROM students
WHERE math_grade > 83;
 -- 6
INSERT INTO students (first_name, last_name, birth_date, math_grade)
SELECT 'Omer', 'Simpson', birth_date, 70
FROM students
WHERE id = 1;
 -- 7
SELECT first_name, last_name, COUNT(math_grade) AS total_grade
FROM students
GROUP BY first_name, last_name;
 -- 8
SELECT SUM(math_grade) AS sum_of_grades
FROM students;

 -- exercice 3
CREATE TABLE purchases (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(id),
    item_id INT REFERENCES items(id),
    quantity_purchased INT
);

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT id FROM customers WHERE firstname = 'Scott' AND lastname = 'Scott'),
    (SELECT id FROM items WHERE name = 'fan'),
    1
);

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT id FROM customers WHERE firstname = 'Melanie' AND lastname = 'Johnson'),
    (SELECT id FROM items WHERE name = 'large desk'),
    10
);

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT id FROM customers WHERE firstname = 'Greg' AND lastname = 'Jones'),
    (SELECT id FROM items WHERE name = 'small desk'),
    2
);

SELECT * FROM purchases;

SELECT p.id, c.firstname, c.lastname, p.item_id, p.quantity_purchased
FROM purchases p
JOIN customers c ON p.customer_id = c.id;


SELECT * 
FROM purchases
WHERE customer_id = 5;


SELECT p.id, c.firstname, c.lastname, i.name AS item_name, p.quantity_purchased
FROM purchases p
JOIN items i ON p.item_id = i.id
JOIN customers c ON p.customer_id = c.id
WHERE i.name IN ('large desk', 'small desk');

SELECT c.firstname, c.lastname, i.name AS item_name
FROM purchases p
JOIN customers c ON p.customer_id = c.id
JOIN items i ON p.item_id = i.id;

INSERT INTO purchases (customer_id, quantity_purchased)
VALUES (1, 5);




