import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import HierarchyTeam from "./Components/EmployeeHierarcy";
import Login from "./Components/Login";
import Feedback from "./Components/Feedback";

import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/emp" element={<HierarchyTeam />} />
        <Route path="/feedback-employees" element={<Feedback />} />
      </Routes>
    </div>
  );
}

export default App;
