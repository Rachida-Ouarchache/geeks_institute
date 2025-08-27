from flask import Flask, render_template, request, redirect, url_for, g
import psycopg2

app = Flask(__name__)

# --- Configuration de la DB ---
DB_CONFIG = {
    "host": "localhost",       
    "dbname": "restaurant",     
    "user": "postgres",         
    "password": "rachidadev93",  
    "port": "5432"              
}


# --- Connexion à la DB ---
def get_db():
    if "db" not in g:
        g.db = psycopg2.connect(**DB_CONFIG)
    return g.db

@app.teardown_appcontext
def close_db(exception):
    db = g.pop("db", None)
    if db is not None:
        db.close()

# --- Route Index ---
@app.route("/")
def index():
    conn = get_db()
    cur = conn.cursor()
    cur.execute("""
        SELECT m.id, m.name, m.price_cents, c.name AS category, ch.full_name AS chef
        FROM menu_items m
        LEFT JOIN categories c ON m.category_id = c.id
        LEFT JOIN chefs ch ON m.chef_id = ch.id
        ORDER BY m.created_at DESC
    """)
    items = cur.fetchall()
    cur.close()
    return render_template("index.html", items=items)

# --- Route Détails ---
@app.route("/menu/<int:item_id>")
def details(item_id):
    conn = get_db()
    cur = conn.cursor()
    cur.execute("""
        SELECT m.id, m.name, m.description, m.price_cents, 
               c.name AS category, ch.full_name AS chef
        FROM menu_items m
        LEFT JOIN categories c ON m.category_id = c.id
        LEFT JOIN chefs ch ON m.chef_id = ch.id
        WHERE m.id = %s
    """, (item_id,))
    item = cur.fetchone()
    cur.close()
    return render_template("details.html", item=item)

# --- Route Ajouter un plat ---
@app.route("/create", methods=["GET", "POST"])
def create():
    conn = get_db()
    cur = conn.cursor()

    if request.method == "POST":
        name = request.form["name"]
        description = request.form["description"]
        price_cents = int(float(request.form["price"]) * 100)
        category_id = request.form["category_id"] or None
        chef_id = request.form["chef_id"] or None

        cur.execute("""
            INSERT INTO menu_items (name, description, price_cents, category_id, chef_id)
            VALUES (%s, %s, %s, %s, %s)
        """, (name, description, price_cents, category_id, chef_id))
        conn.commit()
        return redirect(url_for("index"))

    # Charger catégories et chefs pour le formulaire
    cur.execute("SELECT id, name FROM categories ORDER BY name")
    categories = cur.fetchall()
    cur.execute("SELECT id, full_name FROM chefs ORDER BY full_name")
    chefs = cur.fetchall()
    cur.close()
    return render_template("create.html", categories=categories, chefs=chefs)

# --- Route Editer un plat ---
@app.route("/edit/<int:item_id>", methods=["GET", "POST"])
def edit(item_id):
    conn = get_db()
    cur = conn.cursor()

    if request.method == "POST":
        name = request.form["name"]
        description = request.form["description"]
        price_cents = int(float(request.form["price"]) * 100)
        category_id = request.form["category_id"] or None
        chef_id = request.form["chef_id"] or None

        cur.execute("""
            UPDATE menu_items
            SET name=%s, description=%s, price_cents=%s, category_id=%s, chef_id=%s
            WHERE id=%s
        """, (name, description, price_cents, category_id, chef_id, item_id))
        conn.commit()
        return redirect(url_for("index"))

    # Charger le plat
    cur.execute("SELECT id, name, description, price_cents, category_id, chef_id FROM menu_items WHERE id=%s", (item_id,))
    item = cur.fetchone()

    # Charger catégories et chefs
    cur.execute("SELECT id, name FROM categories ORDER BY name")
    categories = cur.fetchall()
    cur.execute("SELECT id, full_name FROM chefs ORDER BY full_name")
    chefs = cur.fetchall()
    cur.close()

    return render_template("edit.html", item=item, categories=categories, chefs=chefs)

# --- Route Statistiques ---
@app.route("/stats")
def stats():
    conn = get_db()
    cur = conn.cursor()
    
    # Plats par catégorie
    cur.execute("""
        SELECT c.name, COUNT(m.id)
        FROM categories c
        LEFT JOIN menu_items m ON m.category_id = c.id
        GROUP BY c.name
        ORDER BY c.name
    """)
    stats = cur.fetchall()
    
    # Totaux
    cur.execute("SELECT COUNT(*) FROM menu_items")
    total_dishes = cur.fetchone()[0]
    cur.execute("SELECT COUNT(*) FROM chefs WHERE active = TRUE")
    active_chefs = cur.fetchone()[0]
    
    # Plats par chef pour chart
    cur.execute("""
        SELECT ch.full_name, COUNT(m.id)
        FROM chefs ch
        LEFT JOIN menu_items m ON m.chef_id = ch.id
        GROUP BY ch.full_name
        ORDER BY ch.full_name
    """)
    chef_data = cur.fetchall()
    chef_labels = [c[0] for c in chef_data]
    chef_values = [c[1] for c in chef_data]

    # Trend: nombre de plats ajoutés par mois (YYYY-MM)
    cur.execute("""
        SELECT to_char(created_at, 'YYYY-MM') as month, COUNT(*)
        FROM menu_items
        GROUP BY month
        ORDER BY month
    """)
    trend_data = cur.fetchall()
    trend_labels = [t[0] for t in trend_data]
    trend_values = [t[1] for t in trend_data]
    
    cur.close()
    
    return render_template(
        "stats.html",
        stats=stats,
        total_dishes=total_dishes,
        active_chefs=active_chefs,
        chef_labels=chef_labels,
        chef_values=chef_values,
        trend_labels=trend_labels,
        trend_values=trend_values
    )

# --- Route Recherche ---
@app.route("/search")
def search():
    query = request.args.get("q", "")
    results = []
    if query:
        conn = get_db()
        cur = conn.cursor()
        cur.execute("""
            SELECT m.id, m.name, m.price_cents, c.name AS category, ch.full_name AS chef
            FROM menu_items m
            LEFT JOIN categories c ON m.category_id = c.id
            LEFT JOIN chefs ch ON m.chef_id = ch.id
            WHERE m.name ILIKE %s
            ORDER BY m.name
        """, (f"%{query}%",))
        results = cur.fetchall()
        cur.close()
    return render_template("search.html", results=results, query=query)

# --- Lancer l'application ---
if __name__ == "__main__":
    app.run(debug=True)

