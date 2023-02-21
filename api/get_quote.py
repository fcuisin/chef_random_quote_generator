import json
import random

f = open('quotes.json')

quotes_dict = json.load(f)
all_the_quotes = list(quotes_dict["quotes_list"])


def get_random_quote(quotes_list):
    random_num = random.randint(0, len(all_the_quotes) - 1)
    quote_obj = quotes_list[random_num]
    return quote_obj


def filter_quotes_by_name(name):
    result = []
    for quote in all_the_quotes:
        if name.lower() in quote['author'].lower():
            result.append(quote)

    return result


def print_quote(name):
    quotes_by_name = filter_quotes_by_name(name)
    random_quote = get_random_quote(quotes_by_name)

    return random_quote


f.close()
