# from flask import Flask
# from flask_cors import CORS
# from routes.deployment_routes import deployment_bp

# app = Flask(__name__)
# CORS(app)

# app.register_blueprint(deployment_bp)

# @app.route("/")
# def home():
#     return {
#         "message": "CloudDeployX Backend Running Successfully"
#     }

# if __name__ == "__main__":
#     app.run(debug=True)
from flask import Flask
from flask_cors import CORS
from config import Config

from routes.deployment_routes import deployment_bp
from routes.docker_routes import docker_bp
from routes.kubernetes_routes import kubernetes_bp
from routes.settings_routes import settings_bp
from routes.monitoring_routes import monitoring_bp  

app = Flask(__name__)
CORS(app)

app.register_blueprint(deployment_bp)
app.register_blueprint(docker_bp)
app.register_blueprint(kubernetes_bp)
app.register_blueprint(settings_bp)
app.register_blueprint(monitoring_bp)

@app.route("/")
def home():
    return {"message": "CloudDeployX Backend Running Successfully"}

if __name__ == "__main__":
    app.run(debug=True)