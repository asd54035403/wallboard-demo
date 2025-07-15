import React from "react";
import SidebarMenu from "../SidebarMenu";
import { MdOutlineSpaceDashboard } from "react-icons/md"; // 可換成你要的 icon

import "./index.scss";

const LayoutComponent = ({
  title = "Default Title",
  children,
  showGroupTabs = false,
  onGroupChange,
}) => {
  return (
    <div className="layout-component">
      <SidebarMenu />
      <div className="main-content">
        <div className="page-title-bar">
          <span className="page-title-icon">
            <MdOutlineSpaceDashboard size={24} />
          </span>
          <span className="page-title-text">{title}</span>
        </div>
        <div className="page-content">{children}</div>
      </div>
    </div>
  );
};

export default LayoutComponent;
