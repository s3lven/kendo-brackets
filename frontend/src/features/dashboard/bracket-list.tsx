import { User } from "lucide-react";
import BracketSettingsPopover from "./bracket-settings-popover";
import { Bracket, Tournament } from "@/types/bracket_t";
import Link from "next/link";
import { axiosAPI } from "@/lib/axios";
import { auth } from "@clerk/nextjs/server";
import { AxiosError } from "axios";

type BracketListProps = {
  item: Tournament;
};

type BracketContentProps = {
  bracket: Bracket;
  tournamentName: string;
};

const BracketContent = ({ bracket, tournamentName }: BracketContentProps) => {
  return (
    <div className="group relative">
      <Link
        className="bg-shade2 hover:bg-shade2_30 flex justify-between rounded-lg px-4 py-4 shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.01]"
        href={`/${tournamentName}/${bracket.bracketCode}`}
      >
        <div className="flex flex-col items-start justify-center">
          <p className="">{bracket.bracketName}</p>
          <p className="">{bracket.bracketType}</p>
        </div>
        <div className="flex items-center justify-center">
          <p className="">{bracket.status}</p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center justify-center gap-1 pr-[56px]">
            {/* <p>{item.slots.length}</p> */}
            <p>Random Number</p>
            <User />
          </div>
        </div>
      </Link>
      <BracketSettingsPopover name={bracket.bracketName} />
    </div>
  );
};

const getBrackets = async (id: number, token: string | null) => {
  try {
    if (!token) {
      throw new Error("Invalid Token");
    }

    const response = await axiosAPI.get(`/brackets/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data)
    } else {
      console.log(error)
    }
    return []
  }
};

const BracketList = async ({ item }: BracketListProps) => {
  const order = ["Active", "Upcoming", "Past"];
  const { getToken } = auth();
  const token = await getToken();
  const brackets: Bracket[] = await getBrackets(item.id, token);

  return (
    <div className="text-desc no-scrollbar flex h-full w-full flex-grow flex-col justify-start gap-2 overflow-y-auto px-2 py-9 text-white focus:outline-none">
      {brackets
        .toSorted((a, b) => order.indexOf(a.status) - order.indexOf(b.status))
        .map((bracket) => (
          <BracketContent
            key={`${bracket.bracketCode}`}
            tournamentName={item.tournamentName}
            bracket={bracket}
          />
        ))}
    </div>
  );
};

export default BracketList;
