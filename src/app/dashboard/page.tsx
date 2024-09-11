"use client";

import { Bracket, dummyData } from "@/types/bracket_t";
import DashboardItem from "../features/dashboard-item";
import { useEffect, useState } from "react";

const DashboardPage = () => {
  const [bracketData, setBracketData] = useState<Bracket[]>([]);

  useEffect(() => {
    const getAllBrackets = () => {
      setBracketData(dummyData);
    };

    getAllBrackets();
  }, []);

  return (
    <>
      {/* Header */}
      <div className="w-full py-6 border-b border-grey ">
        <h1 className="text-dark text-title">Dashboard</h1>
      </div>
      <div className="w-full h-[42px] flex flex-col gap-5">
        {/* Active Brackets */}
        <DashboardItem bracketData={bracketData} status="Active" />
        {/* Upcoming Brackets */}
        <DashboardItem bracketData={bracketData} status="Upcoming" />
        {/* Past Brackets */}
        <DashboardItem bracketData={bracketData} status="Past" />
      </div>
    </>
  );
};

export default DashboardPage;
