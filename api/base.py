from get_quote import print_quote
from datetime import datetime
from flask import Flask


app = Flask(__name__)


@app.route('/time')
def get_current_time():
    return print_quote()
