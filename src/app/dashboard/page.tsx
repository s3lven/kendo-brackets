"use client";

import {dummyTournamentData, Tournament } from "@/types/bracket_t";
import DashboardItem from "../features/dashboard-item";
import { useEffect, useState } from "react";

const DashboardPage = () => {
  const [tournamentData, setTournamentData] = useState<Tournament[]>([]);

  useEffect(() => {
    const getAllTournaments = () => {
      setTournamentData(dummyTournamentData);
    };

    getAllTournaments();
  }, []);

  return (
    <>
      {/* Header */}
      <div className="w-full h-full py-6 border-b border-grey ">
        <h1 className="text-dark text-title">Dashboard</h1>
      </div>
      <div className="w-full flex flex-col gap-5">
        {/* Active Tournaments */}
        <DashboardItem tournamentData={tournamentData} status="Active"/>
        {/* Upcoming Tournaments */}
        <DashboardItem tournamentData={tournamentData} status="Upcoming"/>
        {/* Past Tournaments */}
        <DashboardItem tournamentData={tournamentData} status="Past"/>
      </div>
    </>
  );
};

export default DashboardPage;
