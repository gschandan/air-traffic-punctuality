import sqlalchemy.orm as orm
from models.air_traffic_model import AirTrafficScheduled
import data.database as db

def get_database():
    database = db.local_session()
    try:
        yield database
    finally:
        database.close()

async def get_all(db: orm.Session):
    return db.query(AirTrafficScheduled).all()
