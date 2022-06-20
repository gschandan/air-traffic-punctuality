from database_setup import populate_air_traffic_data
from server.data.database import database
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from server.settings.settings import get_server_settings

server = FastAPI()

@server.on_event("startup")
async def startup():
    await database.connect()
    populate_air_traffic_data(['air_traffic_all', 'air_traffic_chartered', 'air_traffic_scheduled'], database)

@server.on_event("shutdown")
async def shutdown():
    await database.disconnect()

def get_application() -> FastAPI:
    settings = get_server_settings()

    settings.configure_logging()

    application = FastAPI(**settings.fastapi_kwargs)

    application.add_middleware(
        CORSMiddleware,
        allow_origins = settings.allowed_hosts,
        allow_credentials = True,
        allow_methods = ["*"],
        allow_headers = ["*"],
    )

    application.add_event_handler(
        "startup",
        startup(),
    )
    application.add_event_handler(
        "shutdown",
        shutdown(),
    )

    application.include_router(api_router, prefix=settings.api_prefix)

    return application


app = get_application()