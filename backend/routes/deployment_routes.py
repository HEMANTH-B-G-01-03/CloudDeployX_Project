# from flask import Blueprint, request, jsonify
# from pymongo import MongoClient
# from config import Config

# deployment_bp = Blueprint("deployment", __name__)

# client = MongoClient(
#     Config.MONGODB_URI,
#     tls=True,
#     tlsAllowInvalidCertificates=True,
#     serverSelectionTimeoutMS=5000
# )

# db = client[Config.DB_NAME]

# deployments_collection = db["deployments"]


# @deployment_bp.route("/deploy", methods=["POST"])
# def deploy_application():
#     try:
#         data = request.json

#         deployment = {
#             "appName": data.get("appName"),
#             "dockerImage": data.get("dockerImage"),
#             "replicas": data.get("replicas"),
#             "status": "Running"
#         }

#         result = deployments_collection.insert_one(deployment)

#         return jsonify({
#             "message": "Deployment Created Successfully",
#             "id": str(result.inserted_id)
#         }), 201

#     except Exception as e:
#         return jsonify({
#             "error": str(e)
#         }), 500


# @deployment_bp.route("/deployments", methods=["GET"])
# def get_deployments():

#     deployments = []

#     for deployment in deployments_collection.find():
#         deployments.append({
#             "_id": str(deployment["_id"]),
#             "appName": deployment["appName"],
#             "dockerImage": deployment["dockerImage"],
#             "replicas": deployment["replicas"],
#             "status": deployment["status"]
#         })

#     return jsonify(deployments)


from flask import Blueprint, request, jsonify
from pymongo import MongoClient
from bson import ObjectId
from config import Config
from bson import ObjectId

deployment_bp = Blueprint("deployment", __name__)

# MongoDB Connection
client = MongoClient(Config.MONGODB_URI)

# Test Connection at Startup
try:
    client.admin.command("ping")
    print("✅ MongoDB Connected Successfully")
except Exception as e:
    print("❌ MongoDB Connection Failed")
    print(e)

db = client[Config.DB_NAME]
deployments_collection = db["deployments"]


# CREATE DEPLOYMENT
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


# GET ALL DEPLOYMENTS
@deployment_bp.route("/deployments", methods=["GET"])
def get_deployments():
    try:
        deployments = []

        for deployment in deployments_collection.find():
            deployments.append({
                "_id": str(deployment["_id"]),
                "appName": deployment.get("appName"),
                "dockerImage": deployment.get("dockerImage"),
                "replicas": deployment.get("replicas"),
                "status": deployment.get("status")
            })

        return jsonify(deployments)

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500


# DELETE DEPLOYMENT
@deployment_bp.route("/deploy/<id>", methods=["DELETE"])
def delete_deployment(id):
    try:
        result = deployments_collection.delete_one(
            {"_id": ObjectId(id)}
        )

        if result.deleted_count == 0:
            return jsonify({
                "message": "Deployment not found"
            }), 404

        return jsonify({
            "message": "Deployment deleted successfully"
        }), 200

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500
        
# UPDATE DEPLOYMENT
@deployment_bp.route("/deploy/<id>", methods=["PUT"])
def update_deployment(id):
    try:
        data = request.json

        result = deployments_collection.update_one(
            {"_id": ObjectId(id)},
            {
                "$set": {
                    "replicas": data.get("replicas")
                }
            }
        )

        if result.matched_count == 0:
            return jsonify({
                "message": "Deployment not found"
            }), 404

        return jsonify({
            "message": "Deployment updated successfully"
        }), 200

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500