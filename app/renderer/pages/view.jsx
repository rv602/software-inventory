import { useState } from "react";
import dependenciesData1 from "../../paths2.json";
import dependenciesData2 from "../../paths.json";

const DependencyTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const allDependencies = [
    ...dependenciesData1,
    ...dependenciesData2,
  ];
  const filteredDependencies = allDependencies.filter((dependency) =>
    dependency.path.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">List of Dependencies</h1>
      <input
        type="text"
        placeholder="Search by path..."
        className="w-full p-4 mb-8 rounded-md bg-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th
                className="px-4 py-2 border border-gray-500 text-left"
                style={{ minWidth: "300px" }}
              >
                Project Name
              </th>
              <th className="px-4 py-2 border border-gray-500 text-left">
                Dependencies
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredDependencies.map((dependency) => (
              <tr key={dependency.id}>
                <td className="px-4 py-2 border border-gray-500 text-sm font-medium text-gray-800">
                  {dependency.path}
                </td>
                <td className="px-4 py-2 border border-gray-500 text-sm font-medium text-gray-800">
                  <ul>
                    {Object.entries(dependency.dependencies).map(
                      ([name, version]) => (
                        <li key={name}>
                          {name} : {version}
                        </li>
                      )
                    )}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DependencyTable;
