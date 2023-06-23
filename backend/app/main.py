from fastapi import FastAPI
from api.routes import generate
from mangum import Mangum
from fastapi.middleware.cors import CORSMiddleware

# START COMMAND: uvicorn api:app --reload
app = FastAPI()
handler = Mangum(app)

app.add_middleware(
    CORSMiddleware, 
    allow_origins=["*"], 
    allow_credentials=True, 
    allow_methods=["*"], 
    allow_headers=["*"] 
)
app.include_router(generate.router, prefix="/api")

@app.get("/")
async def root():
    return {"message": "Hello Bigger Applications!"}