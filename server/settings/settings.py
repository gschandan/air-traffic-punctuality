from enum import Enum
from pydantic import BaseSettings
from typing import Any, Dict, List, Type, Callable
from fastapi import FastAPI

class ServerEnvTypes(Enum):
    dev: str = "dev"
    prod: str = "prod"

class BaseServerSettings(BaseSettings):
    server_env: ServerEnvTypes = ServerEnvTypes.dev

    class Config:
        env_file = ".env"

class ServerSettings(BaseServerSettings):
    api_prefix: str = "/api"
    allowed_hosts: List[str] = [
    "http://localhost:5000",
    "https://localhost:5000",
    "localhost:5000"
    ]
    openapi_prefix: str = ""
    title: str = "Flight Tracker API"
    version: str = "0.1.0"
    class Config:
        validate_assignment = True

    @property
    def fastapi_kwargs(self) -> Dict[str, Any]:
        return {
            "openapi_prefix": self.openapi_prefix,
            "title": self.title,
            "version": self.version,
        }

class DevServerSettings(ServerSettings):
    class Config(ServerSettings.Config):
        env_file = ".env"

class ProdServerSettings(ServerSettings):
    class Config(ServerSettings.Config):
        env_file = "prod.env"

environments: Dict[ServerEnvTypes, Type[ServerSettings]] = {
    ServerEnvTypes.dev: DevServerSettings,
    ServerEnvTypes.prod: ProdServerSettings
}

def get_server_settings() -> ServerSettings:
    server_env = BaseServerSettings().server_env
    config = environments[server_env]
    return config()

def create_start_server_handler(app: FastAPI,settings: ServerSettings,) -> Callable:
    async def start_app() -> None:
        await connect_to_db(app, settings)
    return start_app