import database
from server.models.air_traffic_model import AirTrafficScheduled

async def get_all():
    return database.query(AirTrafficScheduled).all()
