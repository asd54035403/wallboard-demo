import React from "react";
import { useNavigate } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";
import "./index.scss";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="error-page">
      <MdErrorOutline size={64} color="#60a5fa" />
      <h2>找不到此頁面</h2>
      <p>您所造訪的頁面不存在或已被移除。</p>
      <button onClick={() => navigate("/")}>回到首頁</button>
    </div>
  );
};

export default ErrorPage;
