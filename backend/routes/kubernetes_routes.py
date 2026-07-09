# from flask import Blueprint, jsonify
# import subprocess

# kubernetes_bp = Blueprint("kubernetes", __name__)
# @kubernetes_bp.route("/kubernetes/pods")
# def get_pods():
#     ...


from flask import Blueprint,jsonify

kubernetes_bp=Blueprint("kubernetes",__name__)

@kubernetes_bp.route("/kubernetes")

def kubernetes():

    return jsonify({

        "cluster":"Not Configured",

        "nodes":0,

        "pods":0,

        "status":"Unavailable"

    })

@kubernetes_bp.route("/kubernetes/pods")

def pods():

    return jsonify([])