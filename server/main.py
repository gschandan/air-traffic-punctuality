import uvicorn
from database_setup import populate_air_traffic_data

if __name__ == "__main__":
    populate_air_traffic_data(table_names=['air_traffic_all', 'air_traffic_chartered', 'air_traffic_scheduled'])
    uvicorn.run("air_traffic_controller:app", host="127.0.0.1", port=5001, reload=True)

    
def get_app_settings() -> AppSettings:
    app_env = BaseAppSettings().app_env
    config = environments[app_env]
    return config()