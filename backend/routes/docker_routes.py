# from flask import Blueprint, jsonify
# import subprocess

# docker_bp = Blueprint("docker", __name__)

# @docker_bp.route("/docker-images")
# def docker_images():

#     result = subprocess.run(
#         ["docker", "images"],
#         capture_output=True,
#         text=True
#     )

#     return jsonify({
#         "stdout": result.stdout,
#         "stderr": result.stderr,
#         "returncode": result.returncode
#     })

from flask import Blueprint, jsonify
import subprocess

docker_bp = Blueprint("docker", __name__)

@docker_bp.route("/docker-images", methods=["GET"])
def get_docker_images():
    try:
        result = subprocess.run(
            [
                "docker",
                "images",
                "--format",
                "{{.Repository}}|{{.Tag}}|{{.ID}}|{{.Size}}"
            ],
            capture_output=True,
            text=True
        )

        images = []

        for line in result.stdout.strip().split("\n"):
            if line:
                repo, tag, image_id, size = line.split("|")
                images.append({
                    "repository": repo,
                    "tag": tag,
                    "image_id": image_id,
                    "size": size
                })

        return jsonify(images)

    except Exception as e:
        return jsonify({"error": str(e)}), 500