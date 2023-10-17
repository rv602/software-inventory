import Router from "next/router";

export default function Home() {

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
