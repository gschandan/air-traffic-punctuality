from functools import lru_cache
from pydantic import BaseSettings, Field
import uvicorn
from data.database_setup import populate_air_traffic_data
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
import api.api_router as api

class Settings(BaseSettings):
    environment: str = Field(..., env="ENVIRONMENT")
    origin_dev: str = Field(..., env="ORIGIN_DEV")
    origin_prod: str = Field(..., env="ORIGIN_PROD")
    host_dev: str = Field(..., env="HOST_DEV")
    host_prod: str = Field(..., env="HOST_PROD")
    class Config:
        env_prefix = ""
        case_sentive = False
        env_file = '.env'
        env_file_encoding = 'utf-8'

settings = Settings()
server = FastAPI()

server.add_middleware(
    CORSMiddleware,
    allow_origins = settings.origin_dev if settings.environment == "dev" else settings.origin_prod,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

server.include_router(api.api_router)

if __name__ == "__main__":
    #populate_air_traffic_data(table_names=['air_traffic_all', 'air_traffic_chartered', 'air_traffic_scheduled'])
    host = settings.host_dev if settings.environment == "dev" else settings.host_prod
    uvicorn.run("main:server", host=host, port=5001, reload=settings.environment == "dev" )
