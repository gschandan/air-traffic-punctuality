from fastapi import APIRouter
from api import air_traffic_all_controller
from api import air_traffic_chartered_controller, air_traffic_scheduled_controller

api_router = APIRouter()
api_router.include_router(air_traffic_all_controller.router_combined, prefix="/api/combined",tags=["combined_data"])
api_router.include_router(air_traffic_chartered_controller.router_chartered, prefix="/api/chartered",tags=["chartered_data"])
api_router.include_router(air_traffic_scheduled_controller.router_scheduled, prefix="/api/scheduled",tags=["scheduled_data"])
