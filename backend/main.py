from fastapi import FastAPI
from api.routes import generate

# START COMMAND: uvicorn api:app --reload
app = FastAPI()

app.include_router(generate.router, prefix="/api",)

@app.get("/")
async def root():
    return {"message": "Hello Bigger Applications!"}