import { useEffect, useState } from "react";
import axios from "axios";

const SampleData = ({ table }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!table) return;

    axios
      .get(`http://localhost:5000/api/sample/${table}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [table]);

  if (!data) return <div>Loading sample data...</div>;

  const { columns, rows } = data;

  return (
    <div className="sample-data">
      <h3>Sample Data ({table})</h3>
      <table border="1" cellPadding="6">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td key={col}>{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SampleData;
