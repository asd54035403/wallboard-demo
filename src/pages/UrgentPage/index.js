import React, { useState } from "react";
import "./index.scss";
import LayoutComponent from "../../components/LayoutComponent";

const mockUrgent = [
  {
    incomingTime: "2023-10-01 10:00",
    hangupTime: "2023-10-01 10:05",
    incomingNumber: "0912345678",
    queueName: "order",
    customerName: "王小明",
    ucid: "UCID123456",
  },
  {
    incomingTime: "2023-10-01 10:10",
    hangupTime: "2023-10-01 10:15",
    incomingNumber: "0987654321",
    queueName: "support",
    customerName: "李小美",
    ucid: "UCID654321",
  },
  {
    incomingTime: "2023-10-01 10:20",
    hangupTime: "2023-10-01 10:25",
    incomingNumber: "0912345678",
    queueName: "order",
    customerName: "王一明",
    ucid: "UCID123451",
  },
];

const UrgentPage = () => {
  return (
    <LayoutComponent title="不耐等候清單">
      <div className="urgent-list-page">
        <table className="urgent-table">
          <thead>
            <tr>
              <th>來電時間</th>
              <th>掛斷時間</th>
              <th>來電號碼</th>
              <th>佇列名稱(VDN/Skill)</th>
              <th>客戶名稱*</th>
              <th>來電序號(UCID)</th>
            </tr>
          </thead>
          <tbody>
            {mockUrgent.map((urgent) => (
              <tr key={urgent.ucid}>
                <td>{urgent.incomingTime}</td>
                <td>{urgent.hangupTime}</td>
                <td>{urgent.incomingNumber}</td>
                <td>{urgent.queueName}</td>
                <td>{urgent.customerName}</td>
                <td>{urgent.ucid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </LayoutComponent>
  );
};

export default UrgentPage;
