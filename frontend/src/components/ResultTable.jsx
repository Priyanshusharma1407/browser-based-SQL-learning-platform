const ResultTable = ({ data }) => {
  const { columns, rows } = data;

  return (
    <div style={{ marginTop: "20px" }}>
      <table className="result-table"  border="1" cellPadding="8">
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

export default ResultTable;
