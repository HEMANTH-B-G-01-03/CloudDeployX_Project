from flask import Blueprint, request, jsonify
from pymongo import MongoClient
from config import Config

deployment_bp = Blueprint("deployment", __name__)

client = MongoClient(Config.MONGODB_URI)

db = client[Config.DB_NAME]

deployments_collection = db["deployments"]


@deployment_bp.route("/deploy", methods=["POST"])
def deploy_application():
    try:
        data = request.json

        deployment = {
            "appName": data.get("appName"),
            "dockerImage": data.get("dockerImage"),
            "replicas": data.get("replicas"),
            "status": "Running"
        }

        result = deployments_collection.insert_one(deployment)

        return jsonify({
            "message": "Deployment Created Successfully",
            "id": str(result.inserted_id)
        }), 201

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500


@deployment_bp.route("/deployments", methods=["GET"])
def get_deployments():

    deployments = []

    for deployment in deployments_collection.find():
        deployments.append({
            "_id": str(deployment["_id"]),
            "appName": deployment["appName"],
            "dockerImage": deployment["dockerImage"],
            "replicas": deployment["replicas"],
            "status": deployment["status"]
        })

    return jsonify(deployments)