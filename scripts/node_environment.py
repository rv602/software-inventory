import json
import os
import platform
import subprocess
import base64

system = platform.system()

if system == "Darwin":
    cmd = "mdfind -onlyin / -name 'node_modules' -type d | grep -v '/node_modules$' | grep -v '/node_modules/' | grep -v '/\\..*/' > tmp_paths.json && grep '^/Users' tmp_paths.json > paths.json"

elif system == "Linux":
    cmd = "plocate -r '/node_modules$' | xargs dirname | grep -v '/node_modules$' | grep -v '/node_modules/' | grep -v '/\..*/' > tmp_paths.json && grep '^/home' tmp_paths.json> paths.json"

subprocess.call(cmd, shell=True)

with open("paths.json", "r") as f:
    paths = f.readlines()

paths = [path.strip() for path in paths]
paths_with_ids = []

for path in paths:
    id = base64.urlsafe_b64encode(os.urandom(6)).decode()
    paths_with_ids.append({"id": id, "path": path})

with open("paths2.json", "w") as f:
    f.write(json.dumps(paths_with_ids, indent=4))

os.remove("tmp_paths.json")
os.remove("paths.json")
