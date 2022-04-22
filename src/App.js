import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reg from "./components/Register/Reg.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Reg />} />
        <Route path="/confirm" element={<Reg />} />
      </Routes>
    </Router>
  );
}

export default App;
