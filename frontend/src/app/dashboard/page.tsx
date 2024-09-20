import { Suspense } from "react";
import DashboardContent from "../../features/dashboard/dashboard-content";
import DashboardLoading from "../../features/dashboard/dashboard-loading";

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-5 pb-8 px-[108px]">
      {/* Header */}
      <div className="w-full py-6 border-b border-grey ">
        <h1 className="text-dark text-title">Dashboard</h1>
      </div>
      <Suspense fallback={<DashboardLoading />}>
        <DashboardContent />
      </Suspense>
    </div>
  );
};

export default DashboardPage;
