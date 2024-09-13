import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { TbTournament } from "react-icons/tb";
import { Play, Users } from "lucide-react";
import InformationPanel from "./information-panel";
import ParticipantsPanel from "./participants-panel";

type NavItemType = {
  value: string;
  icon: JSX.Element;
};

const NavItems: NavItemType[] = [
  {
    value: "bracketInfo",
    icon: <TbTournament size={"30px"} strokeWidth={"1.75px"} />,
  },
  {
    value: "bracketParticipants",
    icon: <Users size={"30px"} />,
  },
  {
    value: "bracketPlay",
    icon: <Play size={"35px"} />,
  },
];

const TriggerItem = ({ value, icon }: NavItemType) => {
  return (
    <Tabs.Trigger
      value={value}
      className="w-full h-full max-h-[60px] flex justify-center items-center
            transition-colors ease-in-out duration-200 text-grey
            hover:bg-neutral6 hover:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)]
            data-[state=active]:bg-neutral8 hover:data-[state=active]:shadow-none data-[state=active]:cursor-default"
    >
      {icon}
    </Tabs.Trigger>
  );
};

const BracketPanel = () => {
  return (
    <Tabs.Root
      className="bg-neutral8 flex w-full max-w-[410px] font-poppins "
      orientation="vertical"
      defaultValue="bracketInfo"
    >
      <Tabs.List
        className="w-full max-w-[60px] h-full flex flex-col shadow-[2px_0px_2px_0px_rgba(0,0,0,0.3)] bg-neutral7"
        aria-label="bracket editor tabs"
      >
        {NavItems.map((item) => (
          <TriggerItem key={item.value} value={item.value} icon={item.icon} />
        ))}
      </Tabs.List>
      <Tabs.Content value="bracketInfo" className="w-full h-full overflow-y-scroll no-scrollbar">
        <InformationPanel />
      </Tabs.Content>
      <Tabs.Content value="bracketParticipants" className="w-full h-full overflow-y-scroll no-scrollbar">
        <ParticipantsPanel />
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default BracketPanel;
