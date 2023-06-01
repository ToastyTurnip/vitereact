from flask import Flask, request
from flask_cors import CORS
import sys

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route('/forms', methods=['POST'])
def handle_json():
    print(request.headers.get('Content-Type'))
    data = request.json
    print(data.get('name'))
    print(data.get('email'))
    return data