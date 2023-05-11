import { useState, useEffect } from "react";
import Router from "next/router";
import dependenciesData1 from "../../paths2.json";
import dependenciesData2 from "../../paths.json";
import axios from "axios";

const DependencyTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const allDependencies = [...dependenciesData1, ...dependenciesData2];
  const filteredDependencies = allDependencies.filter((dependency) =>
    dependency.path.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [responses, setResponses] = useState([]);
  const [dependencies, setDependencies] = useState({
    bcryptjs: "2.4.3",
    "body-parser": "1.20.2",
    cloudinary: "1.35.0",
    "cookie-parser": "1.4.6",
    daisyui: "2.51.5",
    dotenv: "16.0.0",
    express: "3.0.0",
    "express-fileupload": "1.4.0",
    formidable: "2.1.1",
    jsonwebtoken: "9.0.0",
    mongoose: "7.0.0",
    nodemailer: "6.9.1",
    "react-js-pagination": "3.0.3",
    "react-slick": "0.29.0",
    "semantic-ui-css": "2.5.0",
    "semantic-ui-react": "2.1.4",
    validator: "13.9.0",
    nodemon: "2.0.20",
  });

  const getAllVulnerabilities = async () => {
    Object.keys(dependencies).forEach(async (key) => {
      const response = await axios
        .get(
          `https://services.nvd.nist.gov/rest/json/cves/1.0?cpeMatchString=cpe%3A2.3%3Aa%3A%3A${key}%3A${dependencies[key]}&resultsPerPage=1000`,
          {
            headers: {
              "Content-Type": "application/json",
              api_key: "f1847978-47a2-47ed-96fa-04bf161e19ec",
            },
          }
        )
        .then((response) => {
          if (response.data.totalResults > 0) {
            setResponses((prevState) => [...prevState, response.data]);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  useEffect(() => {
    getAllVulnerabilities();
  }, [responses]);

  return (
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
            </tr>
          </thead>
          <tbody>
            {filteredDependencies.map((dependency) => (
              <tr key={dependency.id}>
                <td className="px-4 py-2 border border-gray-500 text-sm font-medium text-center text-gray-800">
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
      <div>
        {responses.length > 0 ? (
          <>
            <p>
              {responses.map((response) => {
                return (
                  <>
                    <p>
                      {response.result.CVE_Items.map((cve) => {
                        return (
                          <>
                            <p>{cve.cve.CVE_data_meta.ID}</p>
                            <p>
                              {cve.cve.description.description_data[0].value}
                            </p>
                          </>
                        );
                      })}
                    </p>
                  </>
                );
              })}
            </p>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default DependencyTable;
