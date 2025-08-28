from flask import Flask, render_template, request, redirect, url_for
from database.connection import get_db_connection

app = Flask(__name__)

# --- ROUTE: MENU ---
@app.route("/")
@app.route("/menu")
def menu():
    conn = get_db_connection()
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
    conn.close()
    return render_template("menu.html", items=items)

# --- ROUTE: ADD ITEM ---
@app.route("/add", methods=["GET","POST"])
def add():
    conn = get_db_connection()
    cur = conn.cursor()
    if request.method == "POST":
        name = request.form["name"]
        description = request.form.get("description","")
        price = int(float(request.form["price"])*100)
        category_id = request.form.get("category_id") or None
        chef_id = request.form.get("chef_id") or None
        image_url = request.form["image_url"] or None

        cur.execute("INSERT INTO menu_items (name, description, price_cents, category_id, chef_id) VALUES (%s,%s,%s,%s,%s,%s)",
                    (name, description, price, category_id, chef_id ,image_url))
        conn.commit()
        cur.close()
        conn.close()
        return redirect(url_for("menu"))

    cur.execute("SELECT id,name FROM categories ORDER BY name")
    categories = cur.fetchall()
    cur.execute("SELECT id,full_name FROM chefs ORDER BY full_name")
    chefs = cur.fetchall()

    cur.close()
    conn.close()
    return render_template("add_item.html", categories=categories, chefs=chefs)

@app.route("/edit/<int:item_id>", methods=["GET","POST"])
def edit(item_id):
    conn = get_db_connection()
    cur = conn.cursor()
    if request.method == "POST":
        name = request.form["name"]
        description = request.form.get("description","")
        price = int(float(request.form["price"])*100)
        category_id = request.form.get("category_id") or None
        chef_id = request.form.get("chef_id") or None
        image_url = request.form["image_url"] or None
        cur.execute("""
            UPDATE menu_items
            SET name=%s, description=%s, price_cents=%s, category_id=%s, chef_id=%s ,image_url=%s
            WHERE id=%s
        """, (name, description, price, category_id, chef_id, image_url ,item_id))
        conn.commit()
        cur.close()
        conn.close()
        return redirect(url_for("menu"))

    cur.execute("SELECT id,name,description,price_cents,category_id,chef_id FROM menu_items WHERE id=%s",(item_id,))
    item = cur.fetchone()
    cur.execute("SELECT id,name FROM categories ORDER BY name")
    categories = cur.fetchall()
    cur.execute("SELECT id,full_name FROM chefs ORDER BY full_name")
    chefs = cur.fetchall()
    cur.close()
    conn.close()
    return render_template("edit_item.html", item=item, categories=categories, chefs=chefs)

# --- ROUTE: DELETE ITEM ---
@app.route("/delete/<int:item_id>", methods=["POST"])
def delete(item_id):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("DELETE FROM menu_items WHERE id=%s",(item_id,))
    conn.commit()
    cur.close()
    conn.close()
    return redirect(url_for("menu"))

# --- ROUTE: SEARCH ---
@app.route("/search")
def search():
    query = request.args.get("q","")
    results = []
    if query:
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute("""
            SELECT id,name,price_cents FROM menu_items
            WHERE name ILIKE %s ORDER BY name
        """, (f"%{query}%",))
        results = cur.fetchall()
        cur.close()
        conn.close()
    return render_template("search.html", results=results, query=query)

# --- ROUTE: STATS ---
@app.route("/stats")
def stats():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("SELECT c.name, COUNT(m.id) FROM categories c LEFT JOIN menu_items m ON m.category_id=c.id GROUP BY c.name")
    stats = cur.fetchall()
    cur.close()
    conn.close()
    return render_template("stats.html", stats=stats)



if __name__=="__main__":
    app.run(debug=True)
