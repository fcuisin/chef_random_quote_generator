import json
import random

f = open('quotes.json')

quotes_dict = json.load(f)
all_the_quotes = list(quotes_dict["quotes_list"])


def get_random_quote(quotes_list):
    random_num = random.randint(0, len(quotes_list) - 1)
    quote_obj = quotes_list[random_num]
    return quote_obj


def print_quote(name):
    quotes_by_name = list(
        filter(lambda q: q['author'] == name, all_the_quotes))
    random_quote = get_random_quote(quotes_by_name)

    return random_quote


f.close()
