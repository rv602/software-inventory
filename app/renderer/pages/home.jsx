import Router from "next/router";

const { exec } = require("child_process");
export default function Home() {
  const runPythonScript = () => {
    exec(
      "python3 scripts/python_environments.py && python3 scripts/node_environment.py",
      (err, stdout, stderr) => {
        Router.push("/view");
      }
    );
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold p-10">Software Inventory</h1>
        <button
          className="bg-blue-500 p-3 rounded-md"
          onClick={() => runPythonScript()}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
