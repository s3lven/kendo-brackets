import { dummyTournamentData, Tournament } from "@/types/bracket_t";

import DashboardItem from "@/features/dashboard/dashboard-item";
import EmptyDashboard from "@/features/dashboard/empty-dashboard";

const getTournamentData = () => {
  return new Promise<void>((resolve) => setTimeout(() => resolve(), 0));
};

const DashboardContent = async () => {
  const tournamentData: Tournament[] = await getTournamentData().then(
    () => dummyTournamentData
  );
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
