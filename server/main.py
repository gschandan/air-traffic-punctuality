import uvicorn

if __name__ == "__main__":
    uvicorn.run("controllers.air_traffic:app", host="0.0.0.0", port=5001, reload=True)