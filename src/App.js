import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import MonitoringPage from "./pages/MonitoringPage";
import AgentList from "./pages/AgentList";
import QueuePage from "./pages/QueuePage";
import TrunkPage from "./pages/TrunkPage";
import UrgentPage from "./pages/UrgentPage";
import ChartPage from "./pages/ChartPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem("auth") === "true"
  );

  const handleLogin = (username) => {
    localStorage.setItem("auth", "true");
    localStorage.setItem("username", username);
    setIsAuthenticated(true);
  };
  // 登入保護元件
  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" replace />;
  };

  return (
    <div className="app-container">
      <Router>
        <Routes>
          {/* 登入頁 */}
          <Route
            path="/login"
            element={<LoginPage onLogin={() => setIsAuthenticated(true)} />}
          />

          {/* 登入後的受保護頁面 */}
          <Route
            path="/"
            element={<PrivateRoute element={<MonitoringPage />} />}
          />
          <Route
            path="/monitor"
            element={<PrivateRoute element={<MonitoringPage />} />}
          />
          <Route
            path="/agents"
            element={<PrivateRoute element={<AgentList />} />}
          />
          <Route
            path="/agent/:agentId"
            element={
              <PrivateRoute element={<div>Agent Detail Placeholder</div>} />
            }
          />
          <Route
            path="/queue"
            element={<PrivateRoute element={<QueuePage />} />}
          />
          <Route
            path="/trunk"
            element={<PrivateRoute element={<TrunkPage />} />}
          />
          <Route
            path="/urgent"
            element={<PrivateRoute element={<UrgentPage />} />}
          />
          <Route
            path="/chart"
            element={<PrivateRoute element={<ChartPage />} />}
          />

          {/* 錯誤頁面 */}
          <Route path="/error" element={<ErrorPage />} />

          {/* fallback：未知路徑顯示錯誤頁 */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
