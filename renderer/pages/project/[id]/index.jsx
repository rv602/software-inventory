import { useRouter } from "next/router";

const ProjectPage = () => {
  const router = useRouter();
  const { dependency } = router.query;
  const dependencyObj = JSON.parse(dependency);

  // Function to map and render vulnerabilities
  const renderPythonVulnerabilities = (vulnerabilities) => {
    return vulnerabilities.map((vulnerability) => (
      <div key={vulnerability.Vulnerability_id} className="mb-4">
        <h3 className="font-semibold">
          Vulnerability Name: {vulnerability.Name}
        </h3>
        <p className="text-blue-500">
          CVE ID: <a href={vulnerability.More_info}>{vulnerability.CVE_id}</a>
        </p>
      </div>
    ));
  };

  // Function to render vulnerabilities
  const renderNodeVulnerabilities = (vulnerabilities) => {
    return vulnerabilities.map((vulnerability, index) => (
      <div key={index} className="bg-white p-4 mb-4 rounded shadow-md">
        <h3 className="font-semibold mb-2">
          Vulnerability: {vulnerability.Name}
        </h3>
        <p>
          Severity:{" "}
          {vulnerability.Severity ? vulnerability.Severity : "Not specified"}
        </p>
        <p>Direct: {vulnerability.Direct ? "Yes" : "No"}</p>
        {vulnerability.Via && <p>Via: {vulnerability.Via.join(", ")}</p>}
        <p>Range: {vulnerability.Range}</p>
        <p>Fix Available: {vulnerability["Fix Available"] ? "Yes" : "No"}</p>
      </div>
    ));
  };

  return (
    <div className="container mx-auto mt-6 p-4">
      <h1 className="text-2xl font-semibold mb-4">Project Details</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p>
          <span className="font-semibold">ID:</span> {dependencyObj.ID}
        </p>
        <p>
          <span className="font-semibold">Path:</span> {dependencyObj.Path}
        </p>
        <p>
          <span className="font-semibold">Environment:</span>{" "}
          {dependencyObj.Env}
        </p>
        <h2 className="font-semibold mt-4">Vulnerabilities:</h2>
        {dependencyObj.Env
          ? renderPythonVulnerabilities(dependencyObj.Vulnerabilities)
          : renderNodeVulnerabilities(dependencyObj.Vulnerabilities)}
      </div>
    </div>
  );
};

export default ProjectPage;
