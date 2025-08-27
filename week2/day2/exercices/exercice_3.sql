-- UPDATE
 -- 1
UPDATE students
SET birth_day = '1998-11-02'
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
   last_name = 'Benichou'
-- COUNT
  -- 1
SELECT count(*) FROM students;
  -- 2
SELECT COUNT(*) FROM students WHERE 


   