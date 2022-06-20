import database
from server.models.air_traffic_model import AirTrafficChartered

async def get_all():
    return database.query(AirTrafficChartered).all()