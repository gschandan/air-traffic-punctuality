from fastapi import HTTPException
import sqlalchemy.orm as orm
from sqlalchemy.sql import func
from models.air_traffic_model import AirTrafficAll
import data.database as db

def get_database():
    database = db.local_session()
    try:
        yield database
    finally:
        database.close()

async def get_month_delay(db: orm.Session):
    try:
        result = db.query(AirTrafficAll.month, func.avg(AirTrafficAll.average_delay_minutes).label("average_delay")).group_by(AirTrafficAll.month).all()
        return result
    except:
        raise HTTPException(status_code=400, detail="Unable to fetch the requested data")

async def get_airport_delay(db: orm.Session):
    try:
        result = db.query(AirTrafficAll.airport, func.avg(AirTrafficAll.average_delay_minutes).label("average_delay")).group_by(AirTrafficAll.airport).all()
        return result
    except:
        raise HTTPException(status_code=400, detail="Unable to fetch the requested data")

