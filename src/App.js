import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MonitoringPage from "./pages/MonitoringPage";
import AgentList from "./pages/AgentList";
import QueuePage from "./pages/QueuePage";
import TrunkPage from "./pages/TrunkPage";
import UrgentPage from "./pages/UrgentPage";
import ChartPage from "./pages/ChartPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<MonitoringPage />} />
          <Route path="/monitor" element={<MonitoringPage />} />
          <Route path="/agents" element={<AgentList />} />
          <Route
            path="/agent/:agentId"
            element={<div>Agent Detail Placeholder</div>}
          />
          <Route path="/queue" element={<QueuePage />} />
          <Route path="/trunk" element={<TrunkPage />} />
          <Route path="/urgent" element={<UrgentPage />} />
          <Route path="/chart" element={<ChartPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
