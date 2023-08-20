import { useState, useEffect } from "react";
import Router from "next/router";
import { TailSpin } from "react-loader-spinner";

export default function DependencyTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [allDependencies, setAllDependencies] = useState([]);

  // Fetch data when the component mounts
  useEffect(() => {
    const refresh = false;
    fetchApi(refresh);
  }, []);

  // Function to fetch data from the API
  const fetchApi = (refresh) => {
    setLoading(true);
    const storedData = localStorage.getItem("apiData");

    if (storedData && !refresh) {
      // Use cached data if available
      setAllDependencies(JSON.parse(storedData));
      setLoading(false);
    } else {
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
          localStorage.setItem(
            "apiData",
            JSON.stringify(data[0].concat(data[1]))
          );
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  };

  // Filter the dependencies based on the search term
  const filteredDependencies = allDependencies.filter((dependency) =>
    dependency.Path.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div>
        {loading ? (
          <>Loading...</>
        ) : (
          <>
            <div className="w-full sm:p-6 ">
              <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
                <div className="sm:flex items-center justify-between">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                    Projects
                  </p>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Search by path..."
                    className="w-1/2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  ></input>
                  <div>
                    <button
                      className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-blue-500 hover:bg-blue-600 focus:outline-none rounded"
                      onClick={() => fetchApi(true)}
                    >
                      <p className="text-sm font-medium leading-none text-white">
                        Refresh
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow p-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto h-[70vh]">
                <table className="w-full whitespace-nowrap">
                  <thead>
                    <tr className="h-16 w-full text-sm leading-none text-gray-800">
                      <th className="font-normal text-left px-2">Project</th>
                      <th className="font-normal text-left px-6">
                        <div className="flex justify-center">Issues</div>
                      </th>
                      <th className="font-normal text-left px-6">
                        <div className="flex justify-center">Total</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="w-full">
                    {filteredDependencies.map((dependency) => (
                      <tr
                        key={dependency.ID}
                        className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
                      >
                        <td className="px-2 cursor-pointer">
                          <div className="flex items-center">
                            <div className="w-10 h-10">
                              <img
                                className="w-full h-full"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
                                alt="Logo"
                              />
                            </div>
                            <div className="px-2">
                              <p className="font-medium">{dependency.Path}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6">
                          <div className="flex justify-center">
                            <p className="text-sm font-medium leading-none text-gray-800">
                              M | H | C
                            </p>
                          </div>
                        </td>
                        <td className="px-6">
                          <div className="flex justify-center">
                            <p className="text-sm leading-3 text-gray-800 mt-2">
                              {dependency.Vulnerabilities.length}
                            </p>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
