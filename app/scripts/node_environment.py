import json
import os
import platform
import subprocess
import base64

system = platform.system()

if system == "Darwin":
    cmd = "mdfind -name node_modules | xargs dirname | grep -v '/node_modules$' | grep -v '/node_modules/' | grep -v '/\..*/' > tmp_paths.json && grep '^/Users' tmp_paths.json > tmp2_paths.json"

elif system == "Linux":
    cmd = "plocate -r '/node_modules$' | xargs dirname | grep -v '/node_modules$' | grep -v '/node_modules/' | grep -v '/\..*/' > tmp_paths.json && grep '^/home' tmp_paths.json > tmp2_paths.json"

subprocess.call(cmd, shell=True)

with open("tmp2_paths.json", "r") as f:
    paths = f.readlines()

paths = [path.strip() for path in paths]
paths_with_ids = []

for path in paths:
    id = base64.urlsafe_b64encode(os.urandom(6)).decode()
    dependencies = {}
    package_json_path = os.path.join(path, "package.json")
    if os.path.exists(package_json_path):
        with open(package_json_path, "r") as f:
            package_json = json.load(f)
        if "dependencies" in package_json:
            dependencies.update(package_json["dependencies"])
        if "devDependencies" in package_json:
            dependencies.update(package_json["devDependencies"])
        # if "peerDependencies" in package_json:
        #     dependencies.update(package_json["peerDependencies"])
        # if "optionalDependencies" in package_json:
        #     dependencies.update(package_json["optionalDependencies"])
        # if "bundledDependencies" in package_json:
        #     dependencies.update(package_json["bundledDependencies"])
        for key in dependencies.keys():
            if dependencies[key].startswith('^'):
                dependencies[key] = dependencies[key][1:]
    paths_with_ids.append({"id": id, "path": path, "dependencies": dependencies})

with open("paths2.json", "w") as f:
    f.write(json.dumps(paths_with_ids, indent=4))

os.remove("tmp_paths.json")
os.remove("tmp2_paths.json")
