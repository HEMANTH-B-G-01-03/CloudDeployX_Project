# from flask import Blueprint, jsonify
# import psutil
# import subprocess
# import time

# monitoring_bp = Blueprint("monitoring", __name__)


# @monitoring_bp.route("/monitoring")
# def monitoring():

#     try:

#         cpu = psutil.cpu_percent(interval=1)

#         memory = psutil.virtual_memory()

#         disk = psutil.disk_usage("/")

#         uptime = time.time() - psutil.boot_time()

#         docker = subprocess.run(
#             ["docker", "ps", "-q"],
#             capture_output=True,
#             text=True
#         )

#         running = len(docker.stdout.strip().splitlines())

#         mongodb = "Connected"

#         backend = "Running"

#         return jsonify({

#             "cpu": cpu,

#             "memory": memory.percent,

#             "disk": disk.percent,

#             "runningContainers": running,

#             "mongodb": mongodb,

#             "backend": backend,

#             "uptime": round(uptime / 3600, 2)

#         })

#     except Exception as e:

#         return jsonify({"error": str(e)})



from flask import Blueprint,jsonify

import psutil

import subprocess

import time

monitoring_bp=Blueprint("monitoring",__name__)

@monitoring_bp.route("/monitoring")

def monitoring():

    try:

        cpu=psutil.cpu_percent(interval=1)

        memory=psutil.virtual_memory()

        disk=psutil.disk_usage("/")

        uptime=round((time.time()-psutil.boot_time())/3600,2)

        docker=subprocess.run(
            ["docker","ps","-q"],
            capture_output=True,
            text=True
        )

        running=len(docker.stdout.splitlines())

        return jsonify({

            "cpu":cpu,

            "memory":memory.percent,

            "disk":disk.percent,

            "runningContainers":running,

            "mongodb":"Connected",

            "backend":"Running",

            "uptime":uptime

        })

    except Exception as e:

        return jsonify({"error":str(e)}),500