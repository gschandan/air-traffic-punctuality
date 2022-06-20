from fastapi import APIRouter
from server.api import air_traffic_all_controller, air_traffic_chartered_controller, air_traffic_scheduled_controller

router = APIRouter()
router.include_router(air_traffic_all_controller.router, tags=["combined"], prefix="/combined")
router.include_router(air_traffic_chartered_controller.router, tags=["chartered"], prefix="/chartered")
router.include_router(air_traffic_scheduled_controller.router, tags=["scheduled"], prefix="/scheduled")
