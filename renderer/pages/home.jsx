import { useState, useEffect } from "react";
import Router from "next/router";
import { TailSpin } from "react-loader-spinner";
import dotenv from "dotenv";

export default function Home() {
  dotenv.config({ path: ".env" });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold p-10">Software Inventory</h1>
        <button
          className="bg-blue-500 p-3 rounded-md"
          onClick={() => Router.push("/view")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
