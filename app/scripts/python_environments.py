import platform
import subprocess
import json
import base64
import os

def get_paths_json():
    system = platform.system()

    if system == "Darwin":  # Mac
        cmd = "mdfind -name activate | grep '/bin/activate$' | xargs dirname | xargs dirname | grep -v '/\..*/' | grep '^/Users' | sort -u | jq -R . | jq -s 'unique' > paths.json"
    elif system == "Linux":  # Linux
        cmd = "locate activate | egrep '/bin/activate$' | xargs -r egrep -l nondestructive 2>/dev/null | xargs -I {} dirname {} | xargs -I {} dirname {} > paths.json"

    subprocess.call(cmd, shell=True)

def modify_json_file(file_path):
    with open(file_path, 'r') as file:
        data = json.load(file)

    for obj in data:
        path = obj['path']
        last_slash_index = path.rfind('/')
        env = path[last_slash_index+1:]
        obj['path'] = path[:last_slash_index]
        obj['env'] = env

    with open(file_path, 'w') as file:
        json.dump(data, file, indent=4)

def read_and_associate_paths(json_file):
    system = platform.system()
    paths=[]
    if system == "Darwin":
        with open(json_file, 'r') as f:
            paths = json.load(f)
    if system == "Linux":
        with open(json_file, 'r') as f:
            paths = f.readlines()
        paths = [path.strip() for path in paths]

    result = []
    for path in paths:
        id = base64.urlsafe_b64encode(os.urandom(6)).decode()
        result.append({'id': id, 'path': path})

    with open(json_file, 'w') as f:
        json.dump(result, f, indent=4)


def update_json_with_dependencies():
    # read the JSON from the file
    with open("paths.json", "r") as f:
        json_data = json.load(f)

    # loop over each object and update with dependencies
    for obj in json_data:
        path = obj["path"]
        env = obj["env"]
        # navigate to the path directory and activate the environment
        activate_command = f"source {path}/{env}/bin/activate && pip3 freeze && deactivate"
        # activate_command = f"source {path}/{env}/bin/activate && pip3 freeze"
        dependencies = subprocess.run(
            ["bash", "-c", activate_command],
            capture_output=True,
            text=True
        )
        # update the object with the dependencies
        obj["dependencies"] = dependencies.stdout.splitlines()

    # write the updated JSON back to the file
    with open("paths.json", "w") as f:
        json.dump(json_data, f)


def modify_dependencies_in_file():
    with open('paths.json', 'r') as f:
        data = json.load(f)
    
    for item in data:
        if 'dependencies' in item:
            dependencies_dict = {}
            for dependency in item['dependencies']:
                dependency_parts = dependency.split('==')
                if len(dependency_parts) >= 2:
                    dependencies_dict[dependency_parts[0]] = dependency_parts[1]

                # dependencies_dict[dependency_parts[0]] = dependency_parts[1]
            item['dependencies'] = dependencies_dict
    
    with open('paths.json', 'w') as f:
        json.dump(data, f, indent=4)

get_paths_json()
read_and_associate_paths('paths.json')
modify_json_file('paths.json')
update_json_with_dependencies()
modify_dependencies_in_file()