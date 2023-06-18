from fastapi import APIRouter, HTTPException
from modules import prompts, utils, constants

router = APIRouter()

@router.get("/generate/snippet")
async def generate_snippet_api(prompt: str):
    if not utils.validate_input_length(prompt):
        raise HTTPException(status_code=422, detail=f"Prompt is too long. Please use {constants.MAX_INPUT_SIZE} or less characters!")
    snippet: str = prompts.generate_branding_snippet(prompt)
    return {"snippet": f"{snippet}"}

@router.get("/generate/keywords")
async def generate_keywords_api(prompt: str):
    if not utils.validate_input_length(prompt):
        raise HTTPException(status_code=422, detail=f"Prompt is too long. Please use {constants.MAX_INPUT_SIZE} or less characters!")
    keywords: str = prompts.generate_keywords(prompt)
    return {"keywords": f"{keywords}"}
