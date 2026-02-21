import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./index";
import Home from "./pages/Home";

import "./pages/styles/style.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
