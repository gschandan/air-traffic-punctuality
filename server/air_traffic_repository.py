import air_traffic_database as db
import sqlalchemy.orm as orm
from air_traffic_model import AirTrafficAll, AirTrafficChartered, AirTrafficScheduled

def get_database():
    database = db.local_session()
    try:
        yield database
    finally:
        database.close()

#Combined Data
async def get_air_traffic_all_data(db: orm.Session):
    return db.query(AirTrafficAll).all()

#Scheduled Flights
async def get_air_traffic_scheduled_data(db: orm.Session):
    return db.query(AirTrafficScheduled).all()

#Chartered Flights
async def get_all_air_traffic_chartered_data(db: orm.Session):
    return db.query(AirTrafficChartered).all()