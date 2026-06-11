from flask import Flask
from flask_cors import CORS
from routes.deployment_routes import deployment_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(deployment_bp)

@app.route("/")
def home():
    return {
        "message": "CloudDeployX Backend Running Successfully"
    }

if __name__ == "__main__":
    app.run(debug=True)