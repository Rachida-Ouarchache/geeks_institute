import psycopg2

DB_CONFIG = {
    "dbname": "restaurant",
    "user": "postgres",
    "password": "rachidadev93",
    "host": "localhost",
    "port": "5432"
}

def get_db_connection():
    conn = psycopg2.connect(**DB_CONFIG)
    return conn
