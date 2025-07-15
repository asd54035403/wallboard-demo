import React from "react";
import GaugeComponent from "react-gauge-component";

const GaugeChart = ({ value = 50, type = "radial" }) => {
  // 這裡可以根據需要處理數據
  // 將數據轉換為圖表所需的格式
  //From: https://github.com/antoniolago/react-gauge-component
  return (
    <div>
      <GaugeComponent
        value={value}
        type={type} //"grafana", "semicircle  "radial"
        labels={{
          valueLabel: {
            style: {
              fontSize: "30px",
              fill: " #0080FF",
              textShadow: " none",
            },
          },
          tickLabels: {
            type: "inner",
            ticks: [
              { value: 10 },
              { value: 20 },
              { value: 30 },
              { value: 40 },
              { value: 50 },
              { value: 60 },
              { value: 70 },
              { value: 80 },
              { value: 90 },
              { value: 100 },
            ],
          },
        }}
        arc={{
          cornerRadius: 0,
          padding: 0.02,
          width: 0.2,
          gradient: false,
          colorArray: [
            "	#C4E1FF",
            " #0072E3",
            " #0072E3",
            " #0072E3",
            " #EA4228",
          ],
          subArcs: [
            { limit: 20 },
            { limit: 40 },
            { limit: 60 },
            { limit: 80 },
            { limit: 100 },
          ],
        }}
        pointer={{
          elastic: true,
          animationDelay: 2,
          type: "needle", //"needle", "blob"  "arrow"
          color: "#000000",
          length: "0.7",
          width: "12",
        }}
      />
    </div>
  );
};

export default GaugeChart;
