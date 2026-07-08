from flask import Blueprint, jsonify
import subprocess

settings_bp = Blueprint("settings", __name__)


def run_command(command):
    try:
        result = subprocess.run(
            command,
            capture_output=True,
            text=True
        )

        if result.returncode == 0:
            return "Running"

        return "Not Running"

    except:
        return "Unavailable"


@settings_bp.route("/settings", methods=["GET"])
def get_settings():

    docker_status = run_command(["docker", "info"])
    kubernetes_status = run_command(["kubectl", "cluster-info"])

    return jsonify({

        "application": "CloudDeployX",

        "version": "1.0",

        "backend": "Running",

        "docker": docker_status,

        "kubernetes": kubernetes_status,

        "database": "Connected"

    })