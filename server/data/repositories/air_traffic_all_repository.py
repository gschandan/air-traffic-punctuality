import database
from server.models.air_traffic_model import AirTrafficAll

async def get_all():
    return database.query(AirTrafficAll).all()
