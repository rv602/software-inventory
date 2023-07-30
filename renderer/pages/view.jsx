import { useState, useEffect } from "react";
import Router from "next/router";
import { TailSpin } from "react-loader-spinner";
import { all } from "axios";

export default function DependencyTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [allDependencies, setAllDependencies] = useState([]);

  useEffect(() => {
    setLoading(true);

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const urls = [
      `${process.env.BACKEND_URL}/python-environments`,
      `${process.env.BACKEND_URL}/node-environments`,
    ];

    Promise.all([
      fetch(urls[0], requestOptions),
      fetch(urls[1], requestOptions),
    ])
      .then((responses) => {
        return Promise.all(
          responses.map((response) => {
            return response.json();
          })
        );
      })
      .then((data) => {
        console.log(data);
        setAllDependencies(data[0].concat(data[1]));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">List of Dependencies</h1>
          <button
            className="bg-blue-500 p-3 rounded-md"
            onClick={() => Router.push("/home")}
          >
            Back
          </button>
        </div>
        {loading ? (
          <>
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
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Search by path..."
              className="w-full p-4 mb-8 rounded-md bg-gray-200 text-center text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th
                      className="px-4 py-2 border border-gray-500 text-center"
                      style={{ minWidth: "300px" }}
                    >
                      Project Name
                    </th>
                    <th className="px-4 py-2 border border-gray-500 text-center">
                      Dependencies
                    </th>
                    <th className="px-4 py-2 border border-gray-500 text-center">
                      Vulnerabilties
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allDependencies.map((dependency) => (
                    <tr key={dependency.id}>
                      <td className="px-4 py-2 border border-gray-500 text-sm font-medium text-gray-800">
                        {dependency.path}
                      </td>
                      <td className="px-4 py-2 border border-gray-500 text-sm font-medium text-gray-800">
                        {dependency.dependencies ? (
                          <ul>
                            {Object.entries(dependency.dependencies).map(
                              ([name, version]) => (
                                <li key={name}>
                                  {name} : {version}
                                </li>
                              )
                            )}
                          </ul>
                        ) : (
                          <p>No dependencies found.</p>
                        )}
                      </td>
                      <td className="px-4 py-2 border border-gray-500 text-sm font-medium text-gray-800"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </>
  );
}
