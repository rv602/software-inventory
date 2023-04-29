import { shell } from "electron";
const { exec } = require("child_process");

export default function Home() {
  const runPythonScript = () => {
    exec("python3 scripts/python_environments.py", (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button className="bg-green-300 p-3 rounded-md" onClick={runPythonScript}>
        Run Python Script
      </button>
    </div>
  );
}
