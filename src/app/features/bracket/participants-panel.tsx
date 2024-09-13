"use client";

import ParticipantsList from "./participants-list";
import { Button } from "@headlessui/react";
import { Shuffle } from "lucide-react";
import { useSlotStore } from "./stores/slots-store";
import { useBracketStore } from "./stores/bracket-store";

const ParticipantsPanel = () => {
  const addSlot = useSlotStore((state) => state.addSlot);
  const shuffleSlots = useSlotStore((state) => state.shuffleSlots);
  const bracketStatus = useBracketStore((state) => state.bracket.status);

  return (
    <div className="w-full h-max flex flex-col gap-2.5 p-4 pb-80 font-poppins">
      <p className="text-grey text-label uppercase w-fit">participants</p>
      <div className="w-full flex flex-col gap-8 px-2 py-4 bg-shade2_30 shadow rounded-sm ">
        <ParticipantsList />

        {bracketStatus == "Editing" ? (
          <div className="w-full flex justify-between">
            <Button
              className="flex justify-center items-center px-5 py-1.5 rounded
            bg-secondary text-white text-label uppercase hover:bg-secondary/80"
              onClick={shuffleSlots}
            >
              <Shuffle size={"24px"} />
            </Button>
            <Button
              className="flex justify-center items-center px-5 py-1.5 rounded
            bg-secondary text-white text-label uppercase hover:bg-secondary/80"
              onClick={addSlot}
            >
              Add Participant
            </Button>
          </div>
        ) : null}
      </div>
      {bracketStatus == "Running" ? (
        <p className="text-center text-grey text-desc">
          Note: You cannot edit the participants after the bracket has started.
          Reset the bracket to make changes.
        </p>
      ) : null}
    </div>
  );
};

export default ParticipantsPanel;
