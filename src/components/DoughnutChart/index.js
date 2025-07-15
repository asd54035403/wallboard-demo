import React from "react";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

//Chart.js v3+ 需要手動註冊元件，SDoughnut 圖表需要 ArcElement
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({
  labels = [],
  data = [],
  colors = [],
  title = "",
  cutout = "60%",
  circumference = 180,
  rotation = -90,
}) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data,
        backgroundColor: colors,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    circumference,
    rotation,
    cutout,
    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "end",
        labels: {
          boxWidth: 15,
          padding: 10,
          font: {
            size: 12,
          },
        },
      },
      datalabels: {
        display: true,
        color: "white",
        font: {
          weight: "",
          size: 10,
        },
        formatter: (value, context) =>
          context.chart.data.labels[context.dataIndex],
        anchor: "center",
        align: "center",
        borderColor: (context) =>
          context.dataset.backgroundColor[context.dataIndex],
        offset: 0,
      },
    },
  };

  return (
    <Doughnut data={chartData} options={options} plugins={[ChartDataLabels]} />
  );
};

export default DoughnutChart;
