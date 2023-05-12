import { useState } from "react";
import Router from "next/router";
import { exec } from "child_process";
import { TailSpin } from "react-loader-spinner";
import dotenv from "dotenv";
import path from "path";

export default function Home() {
  dotenv.config({ path: ".env" });
  const [loading, setLoading] = useState(false);
  const runPythonScript = () => {
    setLoading(true);
    exec(
      "python3 scripts/python_environments.py && python3 scripts/node_environment.py",
      (err, stdout, stderr) => {
        if (err) {
          console.error(err);
        } else {
          setTimeout(() => {
            setLoading(false);
            Router.push("/view");
          }, 3000);
        }
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
        <div className="p-5">
          <TailSpin
            height="40"
            width="40"
            color="lightBlue"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={loading}
          />
        </div>
      </div>
    </div>
  );
}
