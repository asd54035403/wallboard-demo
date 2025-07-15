import React from "react";
import "./index.scss";
import LayoutComponent from "../../components/LayoutComponent";
import GaugeChart from "../../components/GaugeChart";
import DoughnutChart from "../../components/DoughnutChart";
import "./index.scss";

const ChartPage = () => {
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
      agentId: "A002",
      agentName: "李小美",
      status: "AVAILABLE",
    },
    {
      agentId: "A002",
      agentName: "李小美",
      status: "AVAILABLE",
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
    {
      agentId: "A005",
      agentName: "林小芳",
      status: "OTHER",
    },
    {
      agentId: "A005",
      agentName: "林小芳",
      status: "OTHER",
    },
  ];
  // 統計各狀態數量
  const statusData = mockData.reduce((acc, cur) => {
    acc[cur.status] = (acc[cur.status] || 0) + 1;
    return acc;
  }, {});
  //圓餅圖標籤 顏色
  const statusLabels = ["ACD", "AVAILABLE", "AUX", "EXTOUT", "OTHER"];
  const colors = ["#4ade80", "#3b82f6", "#f59e0b", "#ef4444", "#000000"];

  return (
    <LayoutComponent title="Chart Page">
      <div className="chart-page">
        <div className="gauge-block">
          <h2>客服資源使用狀況</h2>
          <GaugeChart value={66} type="radial" />
        </div>
        <div className="doughnut-block">
          {/* Doughnut圖表套件 */}
          <DoughnutChart
            labels={statusLabels}
            data={statusLabels.map((key) => statusData[key] || 0)}
            colors={colors}
            title="Agent Status"
            cutout="60%"
            circumference={180}
            rotation={-90}
          />
        </div>
      </div>
    </LayoutComponent>
  );
};

export default ChartPage;
