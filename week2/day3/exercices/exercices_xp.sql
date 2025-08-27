-- 1
SELECT name FROM language;
-- 2
SELECT 
  f.title ,
  f.description ,
  l.name 
  FROM 
  film f 
  INNER JOIN 
  language l 
  on f.language_id = l.language_id;
-- 3
SELECT 
   l.name ,
   f.title ,
   f.description  
   FROM 
   language l 
   LEFT JOIN film f 
   ON f.language_id = l.language_id;
-- 4
create table new_film(
id SERIAL ,
name varchar(50),
actor_id INTEGER,
primary key (id),
FOREIGN KEY (actor_id) REFERENCES actor (actor_id)
);
INSERT INTO new_film (name,actor_id) VALUES 
('AFFAIR PREJUDICE',2),
('ARACHNOPHOBIA ROLLERCOASTER',3),
('ANYTHING SAVANNAH',5)
-- 5
create table customer_review(
  review_id SERIAL PRIMARY KEY,
  film_id INT NOT NULL,
  language_id INT NOT NULL,
  title varchar(255) NOT NULL,
  score INT CHECK (score BETWEEN 1 AND 10),
  review_text TEXT ,
  last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (film_id) REFERENCES film (film_id) ON DELETE CASCADE,
  FOREIGN KEY (language_id) REFERENCES language (language_id)
);
-- 6
INSERT INTO customer_review(film_id,language_id, title,score,review_text)VALUES
(1,2,'Incroyable et émouvant', 9 ,'Ce film m’a beaucoup touchée. 
L’histoire est bien construite, les acteurs jouent parfaitement
et la musique accompagne chaque scène de manière magistrale. 
Je le recommande vivement !')
INSERT INTO customer_review(film_id,language_id,title,score,review_text)Values
(13,2,'Décevant',5,'Je m’attendais à mieux.
Le scénario est trop prévisible et certains personnages 
manquent de profondeur. Quelques scènes intéressantes, mais dans l’ensemble,
je n’ai pas accroché.');
-- 7
DELETE FROM new_film
WHERE id = 1; 

-- EXERCICE 2
 -- 1
 UPDATE film
 SET language_id = 2 
 WHERE film_id = 5;
 -- 2
 -- Quand on insère un nouveau client dans customer, on doit respecter ces contraintes :

-- store_id doit exister dans la table store

-- address_id doit exister dans la table address
 
 -- 3
 DROP TABLE IF EXISTS customer_review;
 -- C’est une étape facile, à condition qu’aucune autre table ne contienne de clés étrangères pointant vers cette table.
 -- 4
 SELECT count(*) 
 FROM rental 
 WHERE return_date IS NULL;
 -- 5
SELECT f.film_id, f.title, f.rental_rate
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;
-- 6
-- 1
SELECT f.film_id, f.title, f.description
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE f.description LIKE '%sumo%'
  AND a.first_name = 'PENELOPE'
  AND a.last_name = 'MONROE';
-- 2
SELECT film_id, title, description, length, rating
FROM film
WHERE description LIKE '%Documentary%'
  AND length < 60
  AND rating = 'R';
-- 3
SELECT f.film_id, f.title, p.amount, r.return_date
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
JOIN payment p ON r.rental_id = p.rental_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew'
  AND c.last_name = 'Mahan'
  AND p.amount > 4.00
  AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';
-- 4
SELECT f.film_id, f.title, f.description, f.replacement_cost
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew'
  AND c.last_name = 'Mahan'
  AND (f.title LIKE '%boat%' OR f.description LIKE '%boat%')
ORDER BY f.replacement_cost DESC;
