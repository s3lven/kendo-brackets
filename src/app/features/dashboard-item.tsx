import { Bracket, StatusType } from "@/types/bracket_t";

type DashboardItemProps = {
  bracketData: Bracket[];
  status: StatusType
};

const DashboardItem = ({ bracketData, status }: DashboardItemProps) => {
  return (
    <>
      {/* Header */}
      <div className="w-full flex justify-between">
        <h1 className="text-headline text-dark">{status} Tournaments</h1>
        {/* <Button>Create New</Button> */}
      </div>
      {/* List */}
      <div className="w-full flex flex-wrap gap-6">
        {[...bracketData]
          .filter((item) => item.status == "Active")
          .map((item) => (
            // TODO: Calculate the width of the item based on the width of the flexbox (or how big the screen is)
            <div
              key={`${item.tournamentName}-${item.bracketName}-${item.status}`}
              className="w-[392px] h-[210px] bg-slate-300 flex flex-col items-center justify-center"
            >
              {item.bracketName}
            </div>
          ))}
      </div>
    </>
  );
};

export default DashboardItem;
