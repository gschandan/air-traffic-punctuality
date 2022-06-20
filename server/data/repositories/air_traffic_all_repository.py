import sqlalchemy.orm as orm
from models.air_traffic_model import AirTrafficAll
import data.database as db

def get_database():
    database = db.local_session()
    try:
        yield database
    finally:
        database.close()

async def get_all(db: orm.Session):
    return db.query(AirTrafficAll).all()
