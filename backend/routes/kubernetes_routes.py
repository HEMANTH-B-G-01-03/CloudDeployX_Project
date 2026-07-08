from flask import Blueprint, jsonify
import subprocess

kubernetes_bp = Blueprint("kubernetes", __name__)
@kubernetes_bp.route("/kubernetes/pods")
def get_pods():
    ...