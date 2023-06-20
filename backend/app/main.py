from fastapi import FastAPI
from api.routes import generate
from mangum import Mangum

# START COMMAND: uvicorn api:app --reload
app = FastAPI()
handler = Mangum(app)

app.include_router(generate.router, prefix="/api")

@app.get("/")
async def root():
    return {"message": "Hello Bigger Applications!"}