CREATE TABLE students(
id SERIAL PRIMARY KEY,
last_name VARCHAR (500),
first_name VARCHAR (500),
birth_day DATE
);

INSERT INTO students(last_name,first_name,birth_day)VALUES
('Benichou','marc','02/11/1993'),
('Cohen','Yoan','03/12/2010'),
('benichou','lea','27/07/1987'),
('Dux','Amelia','07/04/1996'),
('Grez','David','14/06/2003'),
('Simpson','Omer','03/10/1980'),

SELECT * from students ;

SELECT first_name , last_name FROM students ;

SELECT first_name , last_name FROM students 
WHERE id = 2;

SELECT first_name , last_name FROM students 
WHERE last_name ='Benichou' AND first_name = 'marc'

SELECT first_name , last_name FROM students 
WHERE last_name ='Benichou' OR first_name = 'marc';

SELECT * FROM students 
WHERE first_name like '%a%';

SELECT * FROM students 
WHERE first_name like 'a%';

SELECT * FROM students 
WHERE first_name like '%a';

SELECT *FROM students 
WHERE id IN (1, 3);

SELECT * FROM students 
WHERE birth_day >= '1/01/2000';
