import React from "react";
import DashboardLayout from "./(admin)/layouts/layout";
import { WalletBalance } from "@/components/Cards/WalletBalance";
import { ViewTotals } from "@/components/Cards/ViewTotals";
import { MoreTotals } from "@/components/Cards/MoreTotals";

const Adminpage = () => {
  return (
    <DashboardLayout>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <WalletBalance />
        <ViewTotals />
        <MoreTotals />
        <TodayTotals />
      </div>
    </DashboardLayout>
  );
};

export default Adminpage;
