import React from "react";
import { MdPerson, MdPersonOutline } from "react-icons/md";
import LayoutComponent from "../../components/LayoutComponent";
import "./index.scss";

const QueuePage = () => {
  const mockData = [
    {
      serviceType: "Mass Voice",
      callQueue: 5,
      maxWaitTime: "2.00",
    },
    {
      serviceType: "Mass Video",
      callQueue: 3,
      maxWaitTime: "1.75",
    },
    {
      serviceType: "VIP Voice",
      callQueue: 1,
      maxWaitTime: "5.00",
    },
    {
      serviceType: "VIP Video",
      callQueue: 0,
      maxWaitTime: "N/A",
    },
  ];

  return (
    <LayoutComponent title="Queue Report">
      <div className="queue-page">
        <div className="queue-grid">
          {mockData.map((queue) => (
            <div
              className={`queue-card ${queue.serviceType}`}
              key={queue.serviceType}
            >
              <h3>{queue.serviceType}</h3>
              <p className="queue-callQueue">👤等待人數: {queue.callQueue}</p>
              <p>
                {queue.callQueue > 0 ? (
                  Array.from({ length: queue.callQueue }).map((_, idx) => (
                    <span key={idx}>
                      <MdPerson size={24} color="#333" />
                    </span>
                  ))
                ) : (
                  <MdPersonOutline size={24} color="#333" />
                )}
              </p>
              <p className="queue-maxWaitTime">⏲️最長等待時間:</p>
              <p>{queue.maxWaitTime} seconds</p>
            </div>
          ))}
        </div>
      </div>
    </LayoutComponent>
  );
};

export default QueuePage;
