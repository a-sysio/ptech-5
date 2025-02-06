from flask import Flask, request, Response
from flask_cors import CORS
from db import connect, disconnect

app = Flask(__name__)

CORS(app)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)


