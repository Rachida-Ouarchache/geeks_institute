-- 1
SELECT first_name, last_name, birth_date
FROM students
ORDER BY last_name ASC
LIMIT 4;
-- 2
SELECT first_name, last_name, birth_date
FROM students
ORDER BY birth_date DESC
LIMIT 1;
-- 3
SELECT first_name, last_name, birth_date
FROM students
OFFSET 2
LIMIT 3;
