-- 1
CREATE TABLE customer (
id SERIAL PRIMARY KEY,
first_name VARCHAR (255) NOT NULL,
last_name VARCHAR (255) NOT NULL
);
CREATE TABLE customerprofile(
id SERIAL PRIMARY KEY ,
isloggedin boolean DEFAULT false,
customer_id INTEGER unique ,
CONSTRAINT fk_customer FOREIGN KEY (customer_id) REFERENCES Customer(id) 
ON DELETE CASCADE
);
INSERT INTO customer(first_name, last_name)VALUES
('John','Doe'),
('Jerome','Lalu'),
('Lea','Rive');
INSERT INTO CustomerProfile (isLoggedIn, customer_id)
VALUES (
    TRUE,
    (SELECT id FROM Customer WHERE first_name = 'John' AND last_name = 'Doe')
);
INSERT INTO CustomerProfile (isLoggedIn, customer_id)
VALUES (
    FALSE,
    (SELECT id FROM Customer WHERE first_name = 'Jerome' AND last_name = 'Smith')
);
-- 4
 -- 1
SELECT cr.first_name, cp.isloggedin 
FROM customer cr 
INNER JOIN customerprofile cp 
ON cr.id = cp.customer_id WHERE cp.isloggedin = TRUE;
 -- 2
SELECT cr.first_name, cp.isloggedin FROM customer cr
LEFT OUTER JOIN customerprofile cp ON cr.id = cp.customer_id;
 -- 3
SELECT COUNT(*)
FROM customer cr LEFT JOIN customerProfile cp
ON cr.id = cp.customer_id
WHERE cp.isLoggedIn IS NULL;

-- Part 2
 -- 1
  CREATE TABLE book (
  book_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL, 
  author VARCHAR(255) NOT NULL
  );
  -- 2
  INSERT INTO book(title,author)VALUES
  ('Alice In Wonderland','Lewis Carroll'),
  ('Harry Potte','J.K Rowling'),
  ('To kill a mockingbird','Harper Lee');
  -- 3
 CREATE TABLE student(
student_id SERIAL PRIMARY KEY,
name VARCHAR (255)NOT NULL,
age INT CHECK (age <= 15)
 );
INSERT INTO student(name , age) VALUES 
('John',12),
('Lea',11),
('Patrick',10),
('Bob',14);

 -- 5
CREATE TABLE library (
    book_fk_id INT,
    student_fk_id INT,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id),
    CONSTRAINT fk_book FOREIGN KEY (book_fk_id) 
        REFERENCES Book(book_id)
        ON DELETE CASCADE 
        ON UPDATE CASCADE,
    CONSTRAINT fk_student FOREIGN KEY (student_fk_id) 
        REFERENCES Student(student_id)
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);


-- 1. 
INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
VALUES (
    (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM Student WHERE name = 'John'),
    '2022-02-15'
);

-- 2. 
INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
VALUES (
    (SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'),
    (SELECT student_id FROM Student WHERE name = 'Bob'),
    '2021-03-03'
);


INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
VALUES (
    (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM Student WHERE name = 'Lera'),
    '2021-05-23'
);

INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
VALUES (
    (SELECT book_id FROM Book WHERE title = 'Harry Potter'),
    (SELECT student_id FROM Student WHERE name = 'Bob'),
    '2021-08-12'
);
SELECT * FROM library;

SELECT s.name AS student_name, b.title AS book_title, l.borrowed_date
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id;

SELECT AVG(s.age) AS avg_age
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

DELETE FROM Student WHERE name = 'Bob';

