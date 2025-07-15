import { NavLink, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import "./index.scss";

const SidebarMenu = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("auth");

    navigate("/login");
  };
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <span>Wallboard</span>
      </div>
      <NavLink
        to="/monitor"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        儀錶板
      </NavLink>
      <NavLink
        to="/agents"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        表列
      </NavLink>
      <NavLink
        to="/queue"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        服務狀態
      </NavLink>
      <NavLink
        to="/trunk"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        外線使用狀態
      </NavLink>
      <NavLink
        to="/urgent"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        不耐等候清單
      </NavLink>
      <NavLink
        to="/chart"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        圖表
      </NavLink>
      <button className="sidebar-logout" onClick={handleLogout}>
        <FiLogOut size={18} style={{ marginRight: 8 }} />
        登出
      </button>
    </div>
  );
};

export default SidebarMenu;
