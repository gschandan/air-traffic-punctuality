from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
import air_traffic_schema
import air_traffic_repository
import sqlalchemy.orm as _orm

app = FastAPI()

origins = [
    "http://localhost:5000",
    "https://localhost:5000",
    "localhost:5000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/api/all", response_model=air_traffic_schema.AirTrafficFetch)
async def get_all(db: _orm.Session = Depends(air_traffic_repository.get_database)):
   return await air_traffic_repository.get_all_air_traffic_data(db)