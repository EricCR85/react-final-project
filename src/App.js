import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./index";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

import "./pages/styles/style.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
