import "./App.css";
import Header from "./components/header/Header.js";
import Home from "./pages/Home";
import Quizz from "./pages/Quizz";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const pages = [];
function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizz" element={<Quizz />} />
      </Routes>
    </Router>
  );
}

export default App;
