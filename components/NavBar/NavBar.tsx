"use client";
import { Montserrat } from "next/font/google";
import React, { useState } from "react";
import MobileNavModal from "../Modals/MobileNavModal";

const montserrat = Montserrat({ subsets: ["latin"] });

export const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav
        className={`${montserrat.className} flex gap-3 text-lg justify-between items-center bg-[#032282] top-0 left-0 w-full z-10 md:hidden p-4`}
      >
        <p className="shrink truncate">Analytics dashboard</p>
        <button
          onClick={() => setIsModalOpen(true)}
          type="button"
          className="inline-flex items-center justify-center rounded-md text-center text-xs font-medium  ring-offset-white transition duration-300 hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 active:scale-90 disabled:pointer-events-none disabled:scale-100 disabled:opacity-40 disabled:hover:cursor-not-allowed bg-[#2D4696] px-6 py-2 text-white md:hidden"
        >
          Menu
        </button>
      </nav>

      {/* mobile navigation modal */}
      <MobileNavModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
