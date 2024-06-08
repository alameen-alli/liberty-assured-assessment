"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Nunito, Sora } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });
const sora = Sora({ subsets: ["latin"] });

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Send money", "Cashout", "Utilities and Bills"],
  datasets: [
    {
      data: [105000000, 12000000, 4200000],
      backgroundColor: ["#002366", "#FFCE00", "#D3BFFF"],
      hoverBackgroundColor: ["#002366", "#FFCE00", "#D3BFFF"],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

const DoughnutCard = () => (
  <div
    className={`${nunito.className} flex flex-col gap-10 md:gap-0 sm:flex-row items-center justify-between sm:col-span-2 bg-white p-6 rounded-xl md:col-span-1 md:mx-0 lg:col-span-2`}
  >
    <div className="w-full sm:w-fit flex flex-col rounded-xl h-full ">
      <div className="mb-[1.125rem] flex items-center justify-between gap-2">
        <h2 className="font-[500] text-[#37474F]">Transaction Comparative</h2>
      </div>

      <div className="mt-auto grid grid-cols-2 gap-x-2 gap-y-4">
        <p>
          <span className="mb-1.5 block text-xs text-[#4F64A7]">
            <span className="mr-2 inline-block h-2 w-2  bg-[#032282] rounded-full"></span>
            Send money
          </span>
          <span
            className={`${sora.className} block break-all text-sm font-[600] text-[#263238]`}
          >
            ₦105,000,000
          </span>
        </p>
      </div>

      {/* divider */}
      <div className="my-2">
        <svg
          width="222"
          height="1"
          viewBox="0 0 222 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="2.18557e-08"
            y1="0.75"
            x2="222"
            y2="0.750019"
            stroke="#C4C4C4"
            stroke-width="0.5"
            stroke-dasharray="5 5"
          />
        </svg>
      </div>

      <div className="mt-auto grid grid-cols-2 gap-x-2 gap-y-4">
        <p>
          <span className="mb-1.5 block text-xs text-[#4F64A7]">
            <span className="mr-2 inline-block h-2 w-2  bg-[#F4BE38] rounded-full"></span>
            Cashout
          </span>
          <span
            className={`${sora.className} block break-all text-sm font-[600] text-[#263238]`}
          >
            ₦12,00,000
          </span>
        </p>
        <p>
          <span className="mb-1.5 block text-xs text-[#4F64A7]">
            <span className="mr-2 inline-block h-2 w-2  bg-[#EDE1FF] rounded-full"></span>
            Utilities and Bills
          </span>
          <span
            className={`${sora.className} block break-all text-sm font-[600] text-[#263238]`}
          >
            ₦4,200,000
          </span>
        </p>
      </div>
    </div>
    <div className="w-1/3 flex gap-5 justify-center">
      <Doughnut data={data} options={options} />
    </div>
  </div>
);

export default DoughnutCard;
