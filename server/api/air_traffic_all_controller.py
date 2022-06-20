from typing import List
from fastapi import APIRouter, Depends
import sqlalchemy.orm as orm
import schemas.air_traffic_schema as air_traffic_schema
import data.repositories.air_traffic_all_repository as air_traffic_repository

router_combined = APIRouter()

@router_combined.get("/all", response_model=list[air_traffic_schema.AirTraffic])
async def get_all(db: orm.Session = Depends(air_traffic_repository.get_database)) -> List[air_traffic_schema.AirTrafficBase]:
    return await air_traffic_repository.get_all(db)
