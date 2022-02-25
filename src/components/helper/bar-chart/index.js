import React from "react";



import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



function TheBarChart({ datasets }) {
  const options = {
    type: "bar",
    responsive: true,
    plugins: {
      title: {
        display: false,
        responsive: true
      },

      legend: {
        responsive: true,
        position: "right",
        labels: {
          color: "#fff",
          responsive: true,
          font: {
            size: 10,
            responsive: true
          }
        }
      }
    },
    scales: {
      x: {
        stacked: true,
        responsive: true,
        ticks: {
          color: "#FFF",
          responsive: true,
          font: {
            size: 12,
            responsive: true,
          }
        }
      },
      y: {
        stacked: true,
        beginAtZero: true,
        max: 77000000,
        responsive: true,
        title: {
          display: true,
          text: "CIRCULATING SUPPLY",
          color: "#97DAF7",
          responsive: true,
          font: {
            size: 18,
            responsive: true,
          },
          padding: 0
        },
        ticks: {
          color: "#FFF",
          responsive: true,
          font: {
            size: 12,
            responsive: true
          },
          callback: function (value, index, values) {
            return value / 1e6 + "M";
          }
        }
      }
    },
    animation: {
      easing: "easeInOutQuad",
      duration: 520
    },
    layout: {
      padding: 0,
      responsive: true
    }
  };

  return <Bar options={options} data={datasets} />;
}

export default TheBarChart;
