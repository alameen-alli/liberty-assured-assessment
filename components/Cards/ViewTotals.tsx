import { Sora } from "next/font/google";
import React from "react";

const sora = Sora({ subsets: ["latin"] });

export const ViewTotals = () => {
  return (
    <>
      <div
        className={`${sora.className} flex flex-col rounded-xl bg-white px-[0.875rem] pt-[0.6875rem]`}
      >
        <div className="flex grow flex-col bg-[#F6FAFF] overflow-x-auto rounded-xl px-4 py-6 pb-4">
          <span className="mt-auto block">
            <span className="mb-[1.375rem] block font-heading text-sm font-normal text-[#4F64A7]">
              Total savings balance
            </span>
            <span className="block overflow-x-auto text-xl font-[600] text-[#032282]">
              ₦194,000
            </span>
          </span>
        </div>
        <button className="inline-flex items-center justify-center rounded-md text-center text-xs font-medium hover:opacity-75 focus-visible:outline-none mt-auto w-max px-4 py-[.5625rem]">
          <span className=" text-[#032282] text-xs">View details</span>
        </button>
      </div>

      <div
        className={`${sora.className} flex flex-col rounded-xl bg-white px-[0.875rem] pt-[0.6875rem]`}
      >
        <div className="flex grow flex-col bg-[#F6FAFF] overflow-x-auto rounded-xl px-4 py-6 pb-4">
          <span className="mt-auto block">
            <span className="mb-[1.375rem] block font-heading text-sm font-normal text-[#4F64A7]">
              Total customers
            </span>
            <span className="block overflow-x-auto text-xl font-[600] text-[#032282]">
              ₦919
            </span>
          </span>
        </div>
        <button className="inline-flex items-center justify-center rounded-md text-center text-xs font-medium hover:opacity-75 focus-visible:outline-none mt-auto w-max px-4 py-[.5625rem]">
          <span className=" text-[#032282] text-xs">View details</span>
        </button>
      </div>

      <div
        className={`${sora.className} flex flex-col rounded-xl bg-white px-[0.875rem] pt-[0.6875rem]`}
      >
        <div className="flex grow flex-col bg-[#F6FAFF] overflow-x-auto rounded-xl px-4 py-6 pb-4">
          <span className="mt-auto block">
            <span className="mb-[1.375rem] block font-heading text-sm font-normal text-[#4F64A7]">
              Total POS
            </span>
            <span className="block overflow-x-auto text-xl font-[600] text-[#032282]">
              ₦0
            </span>
          </span>
        </div>
        <button className="inline-flex items-center justify-center rounded-md text-center text-xs font-medium hover:opacity-75 focus-visible:outline-none mt-auto w-max px-4 py-[.5625rem]">
          <span className=" text-[#032282] text-xs">View details</span>
        </button>
      </div>
    </>
  );
};
