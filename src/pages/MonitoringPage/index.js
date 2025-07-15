import React, { useEffect, useState, useRef } from "react";
import "./index.scss";
import LayoutComponent from "../../components/LayoutComponent";
import DoughnutChart from "../../components/DoughnutChart";
const MonitoringPage = () => {
  const [agents, setAgents] = useState([]);
  const [groupFilter, setGroupFilter] = useState("");
  const wsRef = useRef(null);

  //內線 客戶狀態
  // ACD: 通話中;
  // AVAIL: 空閑;
  // AUX: 休息;
  // EXTOUT: 外撥;
  // ACW: 話後處理;

  const mockData = [
    {
      agentId: "A001",
      agentName: "王小明",
      status: "ACD",
    },
    {
      agentId: "A002",
      agentName: "李小美",
      status: "AVAILABLE",
    },
    {
      agentId: "A003",
      agentName: "陳大仁",
      status: "AUX",
    },
    {
      agentId: "A004",
      agentName: "張小華",
      status: "EXTOUT",
    },
    {
      agentId: "A005",
      agentName: "林小芳",
      status: "OTHER",
    },
  ];
  const statusLabels = ["ACD", "AVAILABLE", "AUX", "EXTOUT", "OTHER"];
  const colors = ["#4ade80", "#3b82f6", "#f59e0b", "#ef4444", "#64748b"];
  // 統計各狀態數量
  const statusData = mockData.reduce((acc, cur) => {
    acc[cur.status] = (acc[cur.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <LayoutComponent title="Monitoring Dashboard">
      <div className="agent-page">
        <div className="agent-block">
          <div className="agent-grid">
            {mockData.map((agent) => (
              <div className={`agent-card ${agent.status}`} key={agent.agentId}>
                <h3>{agent.agentName}</h3>
                <hr className="agent-divider" />
                <p className="agent-id">ID: {agent.agentId}</p>
                <p className={`status-label ${agent.status}`}>
                  Status: <span>{agent.status}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="status-statistics">
          <DoughnutChart
            labels={statusLabels}
            data={statusLabels.map((key) => statusData[key] || 0)}
            colors={colors}
            title="Agent Status"
            cutout="60%"
            circumference={360}
            rotation={0}
          />
        </div>
      </div>
    </LayoutComponent>
  );
};

export default MonitoringPage;
