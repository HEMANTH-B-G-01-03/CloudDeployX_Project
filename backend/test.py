from pymongo import MongoClient

uri = "YOUR_MONGODB_URI"

try:
    client = MongoClient(uri)
    client.admin.command("ping")
    print("MongoDB Connected!")
except Exception as e:
    print("Error:", e)
    