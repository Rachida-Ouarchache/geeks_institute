-- 1
SELECT * FROM customer;
-- 2
SELECT 
   first_name , 
   last_name 
FROM 
   customer
AS 
   full_name ;
-- 3
SELECT 
DISTINCT 
   Create_date 
FROM  
   customer ;
-- 4
SELECT *
FROM customer
ORDER BY first_name DESC;
-- 5
SELECT 
   film_id , 
   title , 
   description, 
   release_year, 
   rental_rate
FROM 
   film 
ORDER BY 
   rental_rate ASC ; 
-- 6
SELECT 
   a.address , 
   a.phone 
FROM address a
INNER JOIN 
   customer c 
ON
   a.address_id = c.address_id
WHERE 
   a.district = 'Texas' ;
-- 7
SELECT *
FROM film
WHERE film_id = 15 OR film_id = 150;
-- 8
SELECT film_id , title , description , length , rental_rate  
FROM film 
WHERE title = 'Harry Potter';
-- 9
SELECT film_id , title , description , length , rental_rate  
FROM film 
WHERE title LIKE 'HA%';
-- 10
SELECT 
   film_id, 
   title, 
   description, 
   length, 
   rental_rate
FROM 
   film
ORDER BY 
   rental_rate ASC
LIMIT 10;
-- 11
SELECT 
    film_id, 
    title, 
    description,
    length, 
    rental_rate
FROM 
   film
ORDER BY 
   rental_rate 
ASC
   OFFSET 10;
-- 12
SELECT 
    C.first_name , 
    C.last_name , 
    P.amount , 
    P.payment_date 
FROM 
   customer C 
INNER JOIN 
   payment P 
ON 
   C.customer_id = P.customer_id 
ORDER BY 
   C.customer_id ASC;
-- 13
SELECT f.* 
FROM film f 
INNER JOIN inventory i 
ON f.film_id = i.film_id 
WHERE i.film_id IS NULL;
-- 14
SELECT 
    ci.city AS city_name,
    co.country AS country_name
FROM 
    city ci
JOIN 
    country co
ON 
    ci.country_id = co.country_id
ORDER BY 
    ci.city;
-- 14
SELECT 
    c.customer_id,
    c.first_name,
    c.last_name,
    p.amount,
    p.payment_date,
    p.staff_id
FROM 
    customer c
JOIN 
    payment p ON c.customer_id = p.customer_id
ORDER BY 
    p.staff_id, c.customer_id;