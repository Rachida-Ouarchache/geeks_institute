CREATE TABLE IF NOT EXISTS categories (
id SERIAL PRIMARY KEY,
name VARCHAR(80) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS chefs (
id SERIAL PRIMARY KEY,
full_name VARCHAR(120) NOT NULL
);

CREATE TABLE IF NOT EXISTS menu_items (
id SERIAL PRIMARY KEY,
name VARCHAR(120) NOT NULL,
description TEXT,
price_cents INTEGER NOT NULL CHECK (price_cents >= 0),
category_id INTEGER REFERENCES categories(id) ON DELETE SET NULL,
chef_id INTEGER REFERENCES chefs(id) ON DELETE SET NULL,
available BOOLEAN NOT NULL DEFAULT TRUE,
created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO categories (name) VALUES ('Starters'),('Mains'),('Desserts') ON CONFLICT DO NOTHING;

INSERT INTO chefs (full_name) VALUES ('Amina El Fassi'),('Youssef Benali') ON CONFLICT DO NOTHING;

INSERT INTO menu_items (name, description, price_cents, category_id, chef_id) VALUES
('Harira Soup','Traditional Moroccan soup',3500,1,1),
('Chicken Tagine','With preserved lemons & olives',9000,2,1),
('Grilled Kebab','Mixed meat skewers',8500,2,2),
('Milk Pastilla','Crunchy phyllo dessert',4500,3,1)
ON CONFLICT DO NOTHING;
ALTER TABLE menu_items
ADD COLUMN image_url TEXT;

