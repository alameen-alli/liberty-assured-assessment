import { Nunito } from "next/font/google";
import React from "react";

const nunito = Nunito({ subsets: ["latin"] });

const data = [
  {
    title: "Average transaction Count",
    dropdown: "Today",
    metrics: [
      { label: "Value", value: "₦20,400" },
      { label: "Count", value: "422" },
    ],
  },
  {
    title: "Total commission",
    dropdown: "Today",
    metrics: [
      { label: "POS commission", value: "₦87,000" },
      { label: "Lotto commission", value: "₦102,000" },
    ],
  },
  {
    title: "Total commission",
    dropdown: "Today",
    metrics: [
      { label: "POS commission", value: "₦87,000" },
      { label: "Lotto commission", value: "₦102,000" },
    ],
  },
];

const TodayTotals = () => {
  return (
    <>
      {" "}
      <div className={`${nunito.className} bg-white rounded-xl px-3.5 py-3`}>
        <div className="flex flex-col rounded-xl  h-full bg-[#F6FAFF] px-6 pt-4 pb-6 ">
          <div className="mb-[1.125rem] flex items-center justify-between gap-2">
            <h2 className="text-sm font-medium text-[#4F64A7]">
              Total Cashout
            </h2>
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
          <div className="mt-auto grid grid-cols-2 gap-x-2 gap-y-4">
            <p>
              <span className="mb-1.5 block text-xs text-[#4F64A7]">
                Today{" "}
              </span>
              <span className="block break-all text-sm font-semibold text-[#032282]">
                ₦1,200,000
              </span>
            </p>
            <p className="">
              <span className="mb-1.5 block text-xs text-[#4F64A7]">
                Yesterday{" "}
              </span>
              <span className="block  text-sm font-semibold text-[#032282]">
                ₦1,200,000
              </span>
            </p>
          </div>
        </div>
      </div>
      {" "}
      <div className={`${nunito.className} bg-white rounded-xl px-3.5 py-3`}>
        <div className="flex flex-col rounded-xl  h-full bg-[#F6FAFF] px-6 pt-4 pb-6 ">
          <div className="mb-[1.125rem] flex items-center justify-between gap-2">
            <h2 className="text-sm font-medium text-[#4F64A7]">
              Transaction status
            </h2>
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
          <div className="mt-auto grid grid-cols-2 gap-x-2 gap-y-4">
            <p>
              <span className="mb-1.5 block text-xs text-[#4F64A7]">
                <span className="mr-2 inline-block h-2 w-2  bg-[#18A201] rounded-full"></span>
                Successful
              </span>
              <span className="block break-all text-sm font-semibold text-[#032282]">
                422
              </span>
            </p>
            <p className="">
              <span className="mb-1.5 block text-xs text-[#4F64A7]">
                <span className="mr-2 h-2 w-2 inline-block bg-[#FF0000] rounded-full"></span>
                Failed
              </span>
              <span className="block  text-sm font-semibold text-[#032282]">
                18
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* map remaining cards */}
      {data.map((item, index) => (
        <div key={index} className={` ${nunito.className} bg-white rounded-xl px-3.5 py-3`}>
          <div className="flex flex-col rounded-xl  h-full bg-[#F6FAFF] px-6 pt-4 pb-6 ">
            <div className="mb-[1.125rem] flex items-center justify-between gap-2">
              <h2 className="text-sm font-medium text-[#4F64A7]">
                {item.title}
              </h2>
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
            <div className="mt-auto grid grid-cols-2 gap-x-2 gap-y-4">
              {item.metrics.map((item, index) => (
                <p key={index}>
                  <span className="mb-1.5 block text-xs text-[#4F64A7]">
                    {item.label}
                  </span>
                  <span className="block break-all text-sm font-semibold text-[#032282]">
                    {item.value}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TodayTotals;
