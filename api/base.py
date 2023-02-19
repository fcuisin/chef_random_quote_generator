from get_quote import print_quote
from flask import Flask


app = Flask(__name__)


@app.route('/quote')
def get_random_quote():
    return print_quote()
