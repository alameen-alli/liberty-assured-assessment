"use client";

const nunito = Nunito({ subsets: ["latin"] });


//TransactionChart.tsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Nunito } from "next/font/google";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TransactionChart: React.FC = () => {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Successful",
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        borderColor: "rgba(0, 255, 0, 0.5)",
        backgroundColor: "rgba(0, 255, 0, 0.1)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Failed",
        data: [5, 4, 3, 5, 4, 3, 2, 1, 2, 3, 4, 5],
        borderColor: "rgba(255, 0, 0, 0.5)",
        backgroundColor: "rgba(255, 0, 0, 0.1)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Inflow",
        data: [
          5000000, 4000000, 4500000, 4700000, 1004000, 5000000, 6000000,
          5500000, 5400000, 5200000, 5000000, 5800000,
        ],
        borderColor: "rgba(0, 0, 255, 0.5)",
        backgroundColor: "rgba(0, 0, 255, 0.1)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Transfers",
        data: [
          3000000, 3200000, 3300000, 3500000, 702100, 3000000, 3500000, 3700000,
          3200000, 3100000, 3000000, 3400000,
        ],
        borderColor: "rgba(0, 255, 255, 0.5)",
        backgroundColor: "rgba(0, 255, 255, 0.1)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
        callbacks: {
          label: function (context:any) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "NGN",
              }).format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
    interaction: {
      mode: "nearest" as const,
      axis: "x" as const,
      intersect: false,
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div
      className={`${nunito.className} w-full sm:col-span-4 gap-10 md:gap-0 max-h-[23.5rem] bg-white p-6 rounded-xl md:mx-0 `}
    >
      <Line style={{ width: "100%" }}  data={data} options={options} />
    </div>
  );
};1

export default TransactionChart;
