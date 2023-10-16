import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./Pages/About/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Team from "./Pages/Team/Team";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
