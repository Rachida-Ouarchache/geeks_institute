CREATE TABLE IF NOT EXISTS categories (
id SERIAL PRIMARY KEY,
name VARCHAR(80) NOT NULL UNIQUE,
description TEXT
);

CREATE TABLE IF NOT EXISTS chefs (
id SERIAL PRIMARY KEY,
full_name VARCHAR(120) NOT NULL,
specialty VARCHAR(120),
phone VARCHAR(30),
active BOOLEAN NOT NULL DEFAULT TRUE
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


CREATE INDEX IF NOT EXISTS idx_menu_items_category ON menu_items(category_id);
CREATE INDEX IF NOT EXISTS idx_menu_items_chef ON menu_items(chef_id);


CREATE TYPE order_status AS ENUM ('PENDING', 'CONFIRMED', 'IN_PREP', 'READY', 'SERVED', 'CANCELLED');


CREATE TABLE IF NOT EXISTS orders (
id SERIAL PRIMARY KEY,
table_number INTEGER,
customer_name VARCHAR(120),
status order_status NOT NULL DEFAULT 'PENDING',
notes TEXT,
created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


CREATE TABLE IF NOT EXISTS order_items (
id SERIAL PRIMARY KEY,
order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
menu_item_id INTEGER NOT NULL REFERENCES menu_items(id) ON DELETE RESTRICT,
quantity INTEGER NOT NULL CHECK (quantity > 0),
unit_price_cents INTEGER NOT NULL CHECK (unit_price_cents >= 0), -- snapshot of price
line_total_cents INTEGER GENERATED ALWAYS AS (quantity * unit_price_cents) STORED
);


CREATE INDEX IF NOT EXISTS idx_order_items_order ON order_items(order_id);
CREATE INDEX IF NOT EXISTS idx_order_items_item ON order_items(menu_item_id);


CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
NEW.updated_at = NOW();
RETURN NEW;
END;
$$ LANGUAGE plpgsql;


DROP TRIGGER IF EXISTS trg_menu_items_updated ON menu_items;
CREATE TRIGGER trg_menu_items_updated
BEFORE UPDATE ON menu_items
FOR EACH ROW EXECUTE FUNCTION set_updated_at();


DROP TRIGGER IF EXISTS trg_orders_updated ON orders;
CREATE TRIGGER trg_orders_updated
BEFORE UPDATE ON orders
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

INSERT INTO categories (name, description) VALUES
('Starters','Small dishes to start the meal'),
('Mains','Hearty main courses'),
('Desserts','Sweet finishes')
ON CONFLICT DO NOTHING;


INSERT INTO chefs (full_name, specialty, phone) VALUES
('Amina El Fassi','Moroccan cuisine','+212600000001'),
('Youssef Benali','Grill & BBQ','+212600000002')
ON CONFLICT DO NOTHING;


INSERT INTO menu_items (name, description, price_cents, category_id, chef_id) VALUES
('Harira Soup','Traditional Moroccan soup', 3500, 1, 1),
('Chicken Tagine','With preserved lemons & olives', 9000, 2, 1),
('Grilled Kebab','Mixed meat skewers', 8500, 2, 2),
('Milk Pastilla','Crunchy phyllo dessert', 4500, 3, 1);

