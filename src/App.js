import "./App.css";
import logo from "./logosmall.jpeg";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import HabitantProject from "./HabitantProject";
import AssistanceProject from "./AssistanceProject";
import Registration from "./Registration";
import Login from "./Login";
import Admin from "./Admin";
import Logout from "./Logout";
// import SubmitionPage from "./SubmitionPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HabitantProjectDoc from "./HabitantProjectDoc";
import AssistanceProjectDocuments from "./AssistanceProjectDocuments";
import footer from "./footer.jpeg";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Navbar />
      <Routes>
        <Route path="shandor-project" element={<HomePage />} />
        <Route path="" element={<HomePage />} />
        <Route path="Login" element={<Login />} />
        <Route path="Admin" element={<Admin />} />
        <Route path="Logout" element={<Logout />} />
        {/* <Route path="SubmitionPage" element={<SubmitionPage />} /> */}
        <Route path="Registration" element={<Registration />} />
        <Route path="HabitantProject" element={<HabitantProject />} />
        <Route path="HabitantProject/doc" element={<HabitantProjectDoc />} />
        <Route path="AssistanceProject" element={<AssistanceProject />} />
        <Route
          path="AssistanceProject/documents"
          element={<AssistanceProjectDocuments />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
