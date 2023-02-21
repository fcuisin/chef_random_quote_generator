from get_quote import print_quote
from flask import Flask


app = Flask(__name__)


@app.route('/quote/<name>')
def get_random_quote(name):
    return print_quote(name)
