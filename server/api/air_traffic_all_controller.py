from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
import server.schemas.air_traffic_schema as air_traffic_schema
import server.repositories.air_traffic_repository as air_traffic_repository
import sqlalchemy.orm as _orm


@app.get("/api/all", response_model=list[air_traffic_schema.AirTraffic])
async def get_all(db: _orm.Session = Depends(air_traffic_repository.get_database)):
    return await air_traffic_repository.get_air_traffic_all_data(db)
