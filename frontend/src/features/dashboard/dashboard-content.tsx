// import { dummyTournamentData, Tournament } from "@/types/bracket_t";

import DashboardItem from "@/features/dashboard/dashboard-item";
import EmptyDashboard from "@/features/dashboard/empty-dashboard";
import { Tournament } from "@/types/bracket_t";
import { auth } from "@clerk/nextjs/server";

const DashboardContent = async () => {
  const { getToken } = auth()
  const token = await getToken()

  const response = await fetch("http://backend:5000/api/v1/tournaments", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }

  const tournamentData: Tournament[] = await response.json()

  return tournamentData.length != 0 ? (
      <div className="w-full flex flex-col gap-5">
        {/* Active Tournaments */}
        <DashboardItem tournamentData={tournamentData} status="Active" />
        {/* Upcoming Tournaments */}
        <DashboardItem tournamentData={tournamentData} status="Upcoming" />
        {/* Past Tournaments */}
        <DashboardItem tournamentData={tournamentData} status="Past" />
      </div>
    ) : (
      <EmptyDashboard />
    );
};

export default DashboardContent;
