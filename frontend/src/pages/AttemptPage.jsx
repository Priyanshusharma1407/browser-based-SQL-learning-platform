import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SQLEditor from "../components/SQLEditor";
import ResultTable from "../components/ResultTable";
import SampleData from "../components/SampleData";

const AttemptPage = () => {
  const { id } = useParams();

  const [assignment, setAssignment] = useState(null);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/assignments`)
      .then((res) => {
        const found = res.data.find((a) => a._id === id);
        setAssignment(found);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const runQuery = async () => {
    try {
      setError("");
      const res = await axios.post("http://localhost:5000/api/query/execute", {
        query,
      });

      setResult(res.data);
    } catch (err) {
      setResult(null);
      setError(err.response?.data?.message || "Error running query");
    }
  };

  if (!assignment) return <div>Loading...</div>;

  return (
    <div className="attempt">
      <div className="attempt__header">
        <h2 className="attempt__title">{assignment.title}</h2>
        <p className="attempt__question">{assignment.question}</p>
      </div>

      <SampleData table={assignment.tables[0]} />
      
      <div className="attempt__editor">
        <SQLEditor query={query} setQuery={setQuery} />
        <button className="attempt__run-btn" onClick={runQuery}>
          Run Query
        </button>
      </div>

      {error && <p className="attempt__error">{error}</p>}

      {result && (
        <div className="attempt__result">
          <ResultTable data={result} />
        </div>
      )}
    </div>
  );
};

export default AttemptPage;
