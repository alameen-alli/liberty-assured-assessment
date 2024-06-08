"use client";

// src/LineChart.tsx
import React, { useRef } from "react";
import * as Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";
import { Nunito, Sora } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });
const sora = Sora({ subsets: ["latin"] });

const LineChart: React.FC = (props: HighchartsReact.Props) => {
  if (typeof Highcharts === "object") {
    HighchartsExporting(Highcharts);
  }

  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  // Helper function to generate random values between min and max
  const getRandomValue = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Generate an array of random values for each month
  const generateRandomData = (min: number, max: number) => {
    return Array.from({ length: 12 }, () => getRandomValue(min, max));
  };

  const options: Highcharts.Options = {
    title: {
      text: "",
    },
    xAxis: {
      categories: [
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
      gridLineWidth: 1, // Vertical grid lines only
      gridLineDashStyle: "Dash",
      tickmarkPlacement: "on",
      gridLineInterpolation: "polygon",
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500, // Apply this rule for screens with a maximum width of 500px
          },
          chartOptions: {
            legend: {
              enabled: false, // Disable legend for small screens
            },
            chart: {
              height: 300, // Adjust height for smaller screens
            },
          },
        },
        {
          condition: {
            maxWidth: 320, // Apply this rule for screens with a maximum width of 320px
          },
          chartOptions: {
            chart: {
              height: 250, // Further adjust height for very small screens
            },
            title: {
              style: {
                fontSize: "12px", // Adjust title size
              },
            },
            xAxis: {
              labels: {
                style: {
                  fontSize: "10px", // Adjust x-axis label size
                },
              },
            },
            yAxis: {
              labels: {
                style: {
                  fontSize: "10px", // Adjust y-axis label size
                },
              },
            },
          },
        },
      ],
    },
    yAxis: {
      title: {
        text: "",
      },
      gridLineWidth: 0,
    },
    exporting: {
      enabled: false, // Hide the context menu icon
    },
    legend: { enabled: false },
    plotOptions: {
      series: {
        marker: {
          enabled: false, // Disable markers
        },
      },
    },
    series: [
      {
        name: "transfers",
        data: generateRandomData(1000000, 4000000),
        type: "spline",
        color: "#0FC578B5",
      },
      {
        name: "Successfully",
        data: generateRandomData(3000000, 4000000),
        type: "spline",
        color: "#5879FD",
      },
      {
        name: "failed",
        data: generateRandomData(2000000, 5000000),
        type: "spline",
        color: "#FF0000",
      },
      {
        name: "Inflow",
        data: generateRandomData(3000000, 4000000),
        type: "spline",
        color: "#4264DFE0",
      },
    ],
  };

  return (
    <div
      className={`${nunito.className} bg-white sm:col-span-2 md:col-span-1 lg:col-span-2 xl:col-span-3 2xl:col-span-4 p-6 rounded-xl overflow-x-auto`}
    >
      <div className="flex justify-between my-4">
        <div className="flex flex-col sm:flex-row gap-12 items-center">
          <p className="font-[600] text-[#242424]">Transaction status</p>
          <div className="flex gap-6 items-center">
            <p className="flex items-center">
              <span className=" block text-xs text-[#4F64A7]">
                <span className="mr-2 inline-block h-2 w-2  bg-[#18A201] rounded-full"></span>
                Successful{"  "}-{"  "}
                <span
                  className={`${sora.className} break-all text-sm font-[600] text-[#032282]`}
                >
                  8,400
                </span>
              </span>
            </p>

            <span className="font-[500] text-[#898989]">vs</span>

            <p className="flex items-center">
              <span className=" block text-xs text-[#4F64A7]">
                <span className="mr-2 inline-block h-2 w-2  bg-[#FF0000] rounded-full"></span>
                Failed{"  "}-{"  "}
                <span
                  className={`${sora.className} break-all text-sm font-[600] text-[#032282]`}
                >
                  114
                </span>
              </span>
            </p>
          </div>
        </div>
        <div>
          <button className="flex items-center gap-2 rounded-md bg-[#EDF5FE] px-3 py-2 text-xs font-medium">
            <span className=" text-[#032282]">Today</span>
            <span>
              <svg
                fill="none"
                height="17"
                viewBox="0 0 16 17"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m8.674 11.062 3.045-3.153c.6-.622.175-1.685-.674-1.685h-6.09c-.85 0-1.274 1.063-.674 1.685l3.045 3.153a.93.93 0 0 0 1.348 0Z"
                  fill="#032282"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
        {...props}
      />
    </div>
  );
};

export default LineChart;
