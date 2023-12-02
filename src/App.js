import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import HierarchyTeam from "./Components/EmployeeHierarcy";
import Login from "./Components/Login";
import Feedback from "./Components/Feedback";

import "./App.css";
import PageLayout from "./Components/Layout";
import EmployeeProfile from "./Components/EmployeeProfile";
import Dashboard from "./Components/Dashboard";
import Squad from "./Components/Squad";

function App() {
  return (
    <div className="wrapper">
      {window.location.pathname === "/eval-hub" || window.location.pathname === "/eval-hub/" ||
      window.location.pathname === "/eval-hub/sign-in" ? (
        <Routes>
          <Route path="/eval-hub" element={<LandingPage />} />
          <Route path="/eval-hub/sign-in" element={<Login />} />
        </Routes>
      ) : (
        <PageLayout>
          <Routes>
            <Route path="/eval-hub/dashboard" element={<Dashboard />} />
            <Route path="/eval-hub/squad" element={<Squad />} />
            <Route path="/eval-hub/organization" element={<HierarchyTeam />} />
            <Route path="/eval-hub/feedback-employees" element={<Feedback />} />
            <Route path="/eval-hub/my-profile" element={<EmployeeProfile />} />
          </Routes>
        </PageLayout>
      )}
    </div>
  );
}

export default App;
