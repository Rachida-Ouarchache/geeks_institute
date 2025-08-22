SELECT firstname, lastname
FROM customers
ORDER BY lastname ASC, firstname ASC
LIMIT 2 OFFSET (
    (SELECT COUNT(*) FROM customers) - 2
);

DELETE FROM purchases
WHERE customer_id = (
    SELECT id FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott'
);
SELECT * 
FROM customers
WHERE firstname = 'Scott' AND lastname = 'Scott';

SELECT p.id, c.firstname, c.lastname, p.item_id, p.quantity_purchased
FROM purchases p
LEFT JOIN customers c ON p.customer_id = c.id;

SELECT p.id, c.firstname, c.lastname, p.item_id, p.quantity_purchased
FROM purchases p
INNER JOIN customers c ON p.customer_id = c.id;





