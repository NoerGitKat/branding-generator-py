from argparse import ArgumentParser


def get_cli_input():
    parser = ArgumentParser()
    parser.add_argument('--input', '-i', type=str, required=True)
    args = parser.parse_args()
    return args.input