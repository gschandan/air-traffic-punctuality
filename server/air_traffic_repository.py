import air_traffic_database as db
import sqlalchemy.orm as orm
from air_traffic_model import AirTraffic

def get_database():
    database = db.local_session()
    try:
        yield database
    finally:
        database.close()

async def get_all_air_traffic_data(db: orm.Session):
    return db.query(AirTraffic).all()