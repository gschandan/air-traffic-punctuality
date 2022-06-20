import database as db
import sqlalchemy.orm as orm
from server.models.air_traffic_model import AirTrafficAll, AirTrafficChartered, AirTrafficScheduled

def get_database():
    database = db.local_session()
    try:
        yield database
    finally:
        database.close()

#Scheduled Flights
async def get_air_traffic_scheduled_data(db: orm.Session):
    return db.query(AirTrafficScheduled).all()
