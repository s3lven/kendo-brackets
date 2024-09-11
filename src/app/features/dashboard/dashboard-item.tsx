import { StatusType, Tournament } from "@/types/bracket_t";

import BracketDialog from "./bracket-dialog";

type DashboardItemProps = {
  tournamentData: Tournament[];
  status: StatusType;
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
        {tournamentData
          .filter((item) => item.status == status)
          .map((item) => (
            <BracketDialog
              key={`${item.tournamentName}-${item.status}`}
              item={item}
            />
          ))}
      </div>
    </>
  );
};

export default DashboardItem;
