import "./App.css";
import logo from "./logo.jpeg";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import HabitantProject from "./HabitantProject";
import AssistanceProject from "./AssistanceProject";
import Registration from "./Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <img src={logo} className="App-logo" alt="logo" />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Registration />} />
        <Route path="Habitant Project" element={<HabitantProject />} />
        <Route
          path="Assistance Project"
          element={<AssistanceProject />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
