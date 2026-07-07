from flask import Flask, jsonify, request
from flask_cors import CORS
from database import db
from models import Prod
from config import Config

app = Flask(__name__) 
CORS(app)

app.config.from_object(Config)

db.init_app(app)

with app.app_context():
    db.create_all()

@app.route('/')
def greet():
    return jsonify("Hello Everyone!!")

@app.route('/products', methods=['GET'])
def get_Prod():
    page = request.args.get("page", default=1, type=int)
    limit = request.args.get("limit", default=15, type=int)

    offset = (page-1)*limit

    products = Prod.query.offset(offset).limit(limit).all()

    total = Prod.query.count()

    return jsonify({
        "products": [i.to_dict() for i in products],
        "total": total
    })

if __name__ == "__main__":
    app.run(debug=True)