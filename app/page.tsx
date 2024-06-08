import React from "react";
import DashboardLayout from "./(admin)/layouts/layout";
import { WalletBalance } from "@/components/Cards/WalletBalance";
import { ViewTotals } from "@/components/Cards/ViewTotals";
import { MoreTotals } from "@/components/Cards/MoreTotals";
import TodayTotals from "@/components/Cards/TodayTotals";
import DoughnutCard from "@/components/Cards/DoughnutCard";
import TransactionChart from "@/components/Cards/TransactionCharts";
import LineChart from "@/components/Cards/LineChart";

const Adminpage = () => {
  return (
    <DashboardLayout>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <WalletBalance />
        <ViewTotals />
        <MoreTotals />
        <TodayTotals />
        <DoughnutCard />
        <LineChart />
        <div className="h-[5rem] md:h-[18rem] w-full"></div>
      </div>
    </DashboardLayout>
  );
};

export default Adminpage;
