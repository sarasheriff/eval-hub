import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import HierarchyTeam from "./Components/EmployeeHierarcy";
import Login from "./Components/Login";
import Feedback from "./Components/Feedback";

import "./App.css";
import PageLayout from "./Components/Layout";

function App() {
  return (
    <div className="wrapper">
      <PageLayout>
        <Routes>
          <Route path="/eval-hub" element={<LandingPage />} />
          <Route path="/eval-hub/sign-in" element={<Login />} />
          <Route path="/eval-hub/emp" element={<HierarchyTeam />} />
          <Route path="/eval-hub/feedback-employees" element={<Feedback />} />
        </Routes>
      </PageLayout>
    </div>
  );
}

export default App;
