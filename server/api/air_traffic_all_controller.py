from typing import List, Optional
from fastapi import APIRouter, Depends, Request
from pydantic import BaseModel
import sqlalchemy.orm as orm
import data.repositories.air_traffic_all_repository as air_traffic_repository

router_combined = APIRouter()

class CombinedMonthAverageDelay(BaseModel):
    month: str
    average_delay: float

class CombinedAirportAverageDelay(BaseModel):
    airport: str
    average_delay: float

@router_combined.get("/bar/month/averagedelay", response_model=list[CombinedMonthAverageDelay])
async def get(db: orm.Session = Depends(air_traffic_repository.get_database)) -> List[CombinedMonthAverageDelay]:
    print("HERE")
    return await air_traffic_repository.get_month_delay(db)

@router_combined.get("/bar/airport/averagedelay", response_model=list[CombinedAirportAverageDelay])
async def get(db: orm.Session = Depends(air_traffic_repository.get_database)) -> List[CombinedAirportAverageDelay]:
    return await air_traffic_repository.get_airport_delay(db)
