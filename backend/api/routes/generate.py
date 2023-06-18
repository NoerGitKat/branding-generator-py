from fastapi import APIRouter
from modules import prompts

router = APIRouter()

@router.get("/generate/snippet")
async def generate_snippet_api(prompt: str):
    snippet: str = prompts.generate_branding_snippet(prompt)
    return {"snippet": f"{snippet}"}

@router.get("/generate/keywords")
async def generate_keywords_api(prompt: str):
    keywords: str = prompts.generate_keywords(prompt)
    return {"keywords": f"{keywords}"}
