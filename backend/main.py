from os import getenv
from dotenv import load_dotenv
from modules import prompts, utils
import openai

load_dotenv()

openai.organization = getenv("ORG_ID")
openai.api_key = getenv("OPENAI_API_KEY")


def main():
    print("Running branding generator...")

    user_input = utils.get_cli_input()

    branding_snippet = prompts.generate_branding_snippet(user_input)
    keywords = prompts.generate_keywords(user_input)

    print(f"Snippet: {branding_snippet}")
    print(f"Keywords: {keywords}")


main()
