from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Catégorie de plats (ex : Pizza, Dessert, Boisson)
class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)

    menu_items = db.relationship('MenuItem', backref='category', lazy=True)


# Chef (personne qui prépare les plats)
class Chef(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    specialty = db.Column(db.String(100))


# Plat (élément du menu)
class MenuItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'), nullable=False)
    chef_id = db.Column(db.Integer, db.ForeignKey('chef.id'), nullable=True)


# Commande (client qui commande plusieurs plats)
class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    customer_name = db.Column(db.String(100), nullable=False)
    total_price = db.Column(db.Float, default=0)

    # Relation Many-to-Many avec MenuItem
    items = db.relationship('MenuItem', secondary='order_items', backref='orders')


# Table d’association (Order ↔ MenuItem)
order_items = db.Table('order_items',
    db.Column('order_id', db.Integer, db.ForeignKey('order.id'), primary_key=True),
    db.Column('menu_item_id', db.Integer, db.ForeignKey('menu_item.id'), primary_key=True)
)
