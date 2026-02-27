import Editor from "@monaco-editor/react";

const SQLEditor = ({ query, setQuery }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Editor
        height="250px"
        defaultLanguage="sql"
        value={query}
        onChange={(value) => setQuery(value)}
        theme="vs-dark"
      />
    </div>
  );
};

export default SQLEditor;
