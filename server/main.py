from functools import lru_cache
from pydantic import BaseSettings, Field
import uvicorn
from data.database_setup import populate_air_traffic_data
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
import api.api_router as api

server = FastAPI()

server.add_middleware(
    CORSMiddleware,
    allow_origins = ["https://localhost","http://localhost","localhost","https://flight-insights.gschandan.dev"],
    allow_credentials = False,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

server.include_router(api.api_router)

if __name__ == "__main__":
    #populate_air_traffic_data(table_names=['air_traffic_all', 'air_traffic_chartered', 'air_traffic_scheduled'])
    uvicorn.run("main:server", host="127.0.0.1", port=5001, reload=False )
