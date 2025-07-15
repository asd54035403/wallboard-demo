import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import LayoutComponent from "../../components/LayoutComponent";

const mockAgents = [
  {
    agentId: "A001",
    agentName: "王小明",
    status: "BUSY",
    description: "正在通話中",
  },
  {
    agentId: "A002",
    agentName: "李小美",
    status: "AVL",
    description: "待命中",
  },
  {
    agentId: "A003",
    agentName: "陳大仁",
    status: "AUX",
    description: "休息中",
  },
];

const AgentList = () => {
  const navigate = useNavigate();
  const [groupFilter, setGroupFilter] = useState("");
  const filteredAgents = groupFilter
    ? mockAgents.filter((a) => a.agentGroupId === groupFilter)
    : mockAgents;

  return (
    <LayoutComponent title="Agent List">
      <div className="agent-list-page">
        <div className="group-tabs">
          <button onClick={() => setGroupFilter("")}>全部</button>
          <button onClick={() => setGroupFilter("G1")}>群組1</button>
          <button onClick={() => setGroupFilter("G2")}>群組2</button>
        </div>
        <table className="agent-table">
          <thead>
            <tr>
              <th>專員 ID</th>
              <th>姓名</th>
              <th>狀態</th>
              <th>說明</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {filteredAgents.map((agent) => (
              <tr key={agent.agentId}>
                <td>{agent.agentId}</td>
                <td>{agent.agentName}</td>
                <td className={`status ${agent.status}`}>{agent.status}</td>
                <td>{agent.description}</td>
                <td>
                  <button className="listen">監聽</button>
                  <button
                    className="detail"
                    onClick={() => navigate(`/agent/${agent.agentId}`)}
                  >
                    詳細資料
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </LayoutComponent>
  );
};

export default AgentList;
