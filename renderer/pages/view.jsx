import { useState, useEffect } from "react";
import Router from "next/router";
import { TailSpin } from "react-loader-spinner";

export default function DependencyTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [allDependencies, setAllDependencies] = useState([]);
  const [lastRefreshedAt, setLastRefreshedAt] = useState([]);

  // Fetch data when the component mounts
  useEffect(() => {
    const checkData = localStorage.getItem("apiData");
    if (checkData) {
      const refresh = false;
      fetchApi(refresh);
    }
  }, []);

  // Function to fetch data from the API
  const fetchApi = (refresh) => {
    setLoading(true);
    const storedData = localStorage.getItem("apiData");

    if (storedData && !refresh) {
      // Use cached data if available
      const dependencies = JSON.parse(storedData);
      const lastRefreshedAtString = localStorage.getItem("lastRefreshedAt");

      const lastRefreshedAt = new Date(lastRefreshedAtString);

      // Check for an invalid date
      if (isNaN(lastRefreshedAt)) {
        console.log("Invalid date format");
      } else {
        setAllDependencies(dependencies);
        setLastRefreshedAt(lastRefreshedAt);
      }

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
          const dependencies = data[0].concat(data[1]);
          const lastRefreshed = new Date();
          // Store the last refreshed date in ISO format
          localStorage.setItem("apiData", JSON.stringify(dependencies));
          localStorage.setItem("lastRefreshedAt", lastRefreshed.toISOString());
          setAllDependencies(dependencies);
          setLastRefreshedAt(lastRefreshed);
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

  // Pass props
  const navigateToProjectPage = (dependency) => {
    Router.push({
      pathname: `/project/${dependency.ID}`,
      query: { dependency: JSON.stringify(dependency) },
    });
  };

  return (
    <>
      <div>
        {loading ? (
          <div className="w-full flex justify-center items-center h-[100vh]">
            <TailSpin
              height="200"
              width="200"
              color="lightBlue"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          <>
            <div className="w-full sm:p-6">
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
                  <div className="flex flex-col items-center">
                    <button
                      className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-blue-500 hover:bg-blue-600 focus:outline-none rounded"
                      onClick={() => fetchApi(true)}
                    >
                      <p className="text-sm font-medium leading-none text-white">
                        Refresh
                      </p>
                    </button>
                    {lastRefreshedAt && (
                      <p className="mt-2 text-sm text-gray-500">
                        Last refreshed: {lastRefreshedAt.toLocaleString()}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="bg-white shadow p-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto h-[70vh] xl:h-[80vh]">
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
                    {filteredDependencies.map((dependency) => {
                      //count the number of vulnerabilities for each severity
                      let criticalCount = 0;
                      let highCount = 0;
                      let moderateCount = 0;
                      let lowCount = 0;

                      dependency.Vulnerabilities.forEach((vulnerability) => {
                        if (vulnerability.Severity === "critical") {
                          criticalCount++;
                        } else if (vulnerability.Severity === "high") {
                          highCount++;
                        } else if (vulnerability.Severity === "moderate") {
                          moderateCount++;
                        } else if (vulnerability.Severity === "low") {
                          lowCount++;
                        }
                      });

                      return (
                        <tr
                          key={dependency.ID}
                          className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
                        >
                          <td className="px-2 cursor-pointer">
                            <div className="flex items-center">
                              <div className="w-12 h-10">
                                <img
                                  className="w-full h-full"
                                  src={
                                    dependency.Env
                                      ? "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
                                      : "https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
                                  }
                                  alt="Logo"
                                />
                              </div>
                              <div className="px-2 max-w-sm lg:max-w-lg overflow-x-auto overflow-y-hidden">
                                <p
                                  className="font-medium"
                                  onClick={() =>
                                    navigateToProjectPage(dependency)
                                  }
                                >
                                  {dependency.Path}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td class="px-6">
                            <div class="flex justify-center">
                              <div class="severity-count flex font-medium text-[1rem]">
                                <div
                                  class={`count-box ${
                                    criticalCount == 0
                                      ? "bg-[#E7E7E7]"
                                      : "bg-[#be0000]"
                                  } p-[8px] w-[30px] mr-[1px]`}
                                >
                                  <span class="severity-label text-white ml-0">
                                    C
                                  </span>
                                </div>
                                <div
                                  class={`critical-count ${
                                    criticalCount == 0
                                      ? "bg-[#BEBEBE] text-white"
                                      : "bg-[#ffd7d4] text-[#be0000]"
                                  } p-[8px] mr-2 w-9 text-center`}
                                >
                                  {criticalCount}
                                </div>
                                <div
                                  class={`count-box ${
                                    highCount == 0
                                      ? "bg-[#E7E7E7]"
                                      : "bg-[#e23a00]"
                                  } p-[8px] w-[30px] mr-[1px]`}
                                >
                                  <span class="severity-label text-white ml-0">
                                    H
                                  </span>
                                </div>
                                <div
                                  class={`high-count ${
                                    highCount == 0
                                      ? "bg-[#BEBEBE] text-white"
                                      : "bg-[#fedbc9] text-[#e23a00]"
                                  } p-[8px] mr-2 w-9 text-center`}
                                >
                                  {highCount}
                                </div>
                                <div
                                  class={`count-box ${
                                    moderateCount == 0
                                      ? "bg-[#E7E7E7]"
                                      : "bg-[#e57f01]"
                                  } p-[8px] w-[30px] mr-[1px]`}
                                >
                                  <span class="severity-label text-white ml-0">
                                    M
                                  </span>
                                </div>
                                <div
                                  class={`moderate-count ${
                                    moderateCount == 0
                                      ? "bg-[#BEBEBE] text-white"
                                      : "bg-[#ffeacb] text-[#e57f01]"
                                  } p-[8px] mr-2 w-9 text-center`}
                                >
                                  {moderateCount}
                                </div>
                                <div
                                  class={`count-box ${
                                    lowCount == 0
                                      ? "bg-[#E7E7E7]"
                                      : "bg-[#88879E]"
                                  } p-[8px] w-[30px] mr-[1px]`}
                                >
                                  <span class="severity-label text-white ml-0">
                                    L
                                  </span>
                                </div>
                                <div
                                  class={`low-count ${
                                    lowCount == 0
                                      ? "bg-[#BEBEBE] text-white"
                                      : "bg-[#EEEEEE] text-[#88879E]"
                                  } p-[8px] mr-2 w-9 text-center`}
                                >
                                  {lowCount}
                                </div>
                              </div>
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
                      );
                    })}
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
