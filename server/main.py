import uvicorn
from data import database

if __name__ == "__main__":
    database.create_tables(table_names=['air_traffic_all', 'air_traffic_chartered', 'air_traffic_scheduled'])
    uvicorn.run("controllers.air_traffic:app", host="0.0.0.0", port=5001, reload=True)
