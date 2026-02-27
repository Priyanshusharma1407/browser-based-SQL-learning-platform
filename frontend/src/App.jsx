import { BrowserRouter, Routes, Route } from "react-router-dom";
import AssignmentList from "./pages/AssignmentList";
import AttemptPage from "./pages/AttemptPage";

import "./styles/main.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AssignmentList />} />
        <Route path="/assignment/:id" element={<AttemptPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
