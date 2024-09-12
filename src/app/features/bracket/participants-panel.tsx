
import { Slot } from "@/types/bracket_t";
import ParticipantsList from "./participants-list";

type ParticipantsPanelProps = {
  bracketParticipants: Slot[];
};

const ParticipantsPanel = ({ bracketParticipants }: ParticipantsPanelProps) => {
  return (
    <div className="w-full h-full flex flex-col gap-2.5 p-4 font-poppins">
      <p className="text-grey text-label uppercase w-fit">participants</p>
      <ParticipantsList bracketParticipants={bracketParticipants} />
    </div>
  );
};

export default ParticipantsPanel;
