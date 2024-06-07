import React from "react";

export const WalletBalance = () => {
  return (
    <div
      style={{ backgroundImage: "url('/assets/ad-rectangles.svg')" }}
      className="space-y-3 rounded-xl bg-[#032282] bg-right bg-no-repeat p-6 text-white"
    >
      <div className="flex items-end">
        <div className="grow">
          <span className="mb-0.5 block text-sm text-[#cdcdcd]">
            Wallet balance
          </span>
          <span className="no-scrollbar block overflow-x-auto font-heading text-xl font-semibold">
            ₦50,000.00
          </span>
        </div>
        <button className="hover:bg-[#ecf1ff14] w-10 h-10 inline-flex items-center justify-center rounded-full">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 16.33C9.61001 16.33 7.67001 14.39 7.67001 12C7.67001 9.61001 9.61001 7.67001 12 7.67001C14.39 7.67001 16.33 9.61001 16.33 12C16.33 14.39 14.39 16.33 12 16.33ZM12 9.17001C10.44 9.17001 9.17001 10.44 9.17001 12C9.17001 13.56 10.44 14.83 12 14.83C13.56 14.83 14.83 13.56 14.83 12C14.83 10.44 13.56 9.17001 12 9.17001Z"
              fill="white"
            />
            <path
              d="M12 21.02C8.23999 21.02 4.68999 18.82 2.24999 15C1.18999 13.35 1.18999 10.66 2.24999 8.99998C4.69999 5.17998 8.24999 2.97998 12 2.97998C15.75 2.97998 19.3 5.17998 21.74 8.99998C22.8 10.65 22.8 13.34 21.74 15C19.3 18.82 15.75 21.02 12 21.02ZM12 4.47998C8.76999 4.47998 5.67999 6.41998 3.51999 9.80998C2.76999 10.98 2.76999 13.02 3.51999 14.19C5.67999 17.58 8.76999 19.52 12 19.52C15.23 19.52 18.32 17.58 20.48 14.19C21.23 13.02 21.23 10.98 20.48 9.80998C18.32 6.41998 15.23 4.47998 12 4.47998Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className="flex max-w-[15.0625rem] gap-5">
        <button
          color="white"
          className="inline-flex items-center justify-center rounded-md text-center font-medium ring-offset-white transition duration-300 hover:opacity-75  grow bg-white/10 px-3 py-2.5 text-xs text-white md:text-sm"
        >
          Add funds
        </button>
        <button
          color="white"
          className="inline-flex items-center justify-center rounded-md text-center font-medium ring-offset-white transition duration-300 hover:opacity-75  grow bg-white/10 px-3 py-2.5 text-xs text-white md:text-sm"
        >
          Withdraw
        </button>
      </div>
    </div>
  );
};
