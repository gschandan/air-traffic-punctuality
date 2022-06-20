from typing import List
from fastapi import APIRouter
import server.schemas.air_traffic_schema as air_traffic_schema
import server.data.repositories.air_traffic_scheduled_repository as air_traffic_repository

router = APIRouter()

@router.get("/all", response_model=list[air_traffic_schema.AirTraffic], name="scheduled:get-all")
async def get_all() -> List[air_traffic_schema.AirTrafficBase]:
    return await air_traffic_repository.get_all()
