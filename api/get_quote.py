import json
import random

f = open('quotes.json')

quotes_dict = json.load(f)
all_the_quotes = list(quotes_dict["quotes_list"])


def get_random_quote(quotes_list):
    random_num = random.randint(0, len(all_the_quotes) - 1)
    quote_obj = quotes_list[random_num]
    return quote_obj


def print_quote():
    random_quote = get_random_quote(all_the_quotes)

    return random_quote


f.close()
