from argparse import ArgumentParser
from modules import constants


def get_cli_input() -> str:
    parser = ArgumentParser()
    parser.add_argument('--input', '-i', type=str, required=True)
    args = parser.parse_args()
    if validate_input_length(args.input):
        return args.input
    else:
        raise ValueError(
            f"Input length is too long. Must be under {constants.MAX_INPUT_SIZE} chars")


def validate_input_length(input: str) -> bool:
    return len(input) <= constants.MAX_INPUT_SIZE
