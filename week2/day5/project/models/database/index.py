from psycopg2 import connect
from psycopg2.extras import RealDictConnection
import os
from dotenv import load_dotenv

load_dotenv()


def connect_to_db():
    try:
        conn = connect(
            host=os.getenv("PGHOST"),
            database=os.getenv("PGDATABASE"),
            user=os.getenv("PGUSER"),
            password=os.getenv("PGPASSWORD"),
            sslmode=os.getenv("PGSSLMODE"),
            connection_factory=RealDictConnection,
        )
        return conn
    except Exception as e:
        print(e)
        return None