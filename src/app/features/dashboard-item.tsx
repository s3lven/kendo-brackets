import { StatusType, Tournament } from "@/types/bracket_t";

type DashboardItemProps = {
  tournamentData: Tournament[];
  status: StatusType
};

const DashboardItem = ({ tournamentData, status }: DashboardItemProps) => {
  return (
    <>
      {/* Header */}
      <div className="w-full flex justify-between">
        <h1 className="text-headline text-dark">{status} Tournaments</h1>
        {/* <Button>Create New</Button> */}
      </div>
      {/* List */}
      <div className="w-full flex flex-wrap gap-6">
        {[...tournamentData]
          .filter((item) => item.status == status)
          .map((item) => (
            // TODO: Calculate the width of the item based on the width of the flexbox (or how big the screen is)
            <div
              key={`${item.tournamentName}-${item.status}`}
              className="w-[392px] h-[210px] bg-slate-300 flex flex-col items-center justify-center"
            >
              {item.tournamentName}
            </div>
          ))}
      </div>
    </>
  );
};

export default DashboardItem;
