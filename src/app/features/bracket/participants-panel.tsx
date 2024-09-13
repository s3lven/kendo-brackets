"use client";

import ParticipantsList from "./participants-list";
import { Shuffle } from "lucide-react";
import { useSlotStore } from "./stores/slots-store";
import { useBracketStore } from "./stores/bracket-store";
import EditorButton from "@/components/ui/editor-button";
import { useShallow } from "zustand/react/shallow";

const ParticipantsPanel = () => {
  const { addSlot, shuffleSlots } = useSlotStore(
    useShallow((state) => ({
      addSlot: state.addSlot,
      shuffleSlots: state.shuffleSlots,
    }))
  );
  const { bracketStatus } = useBracketStore(
    useShallow((state) => ({ bracketStatus: state.bracket.status }))
  );

  return (
    <div className="w-full h-max flex flex-col gap-2.5 p-4 pb-80 font-poppins">
      <p className="text-grey text-label uppercase w-fit">participants</p>
      <div className="w-full flex flex-col gap-8 px-2 py-4 bg-shade2_30 shadow rounded-sm ">
        <ParticipantsList />

        {bracketStatus === "Editing" ? (
          <div className="w-full flex justify-between">
            <EditorButton
              text={<Shuffle size={"24px"} />}
              onClickHandler={shuffleSlots}
            />
            <EditorButton text="Add Participant" onClickHandler={addSlot} />
          </div>
        ) : null}
      </div>
      {bracketStatus !== "Editing" ? (
        <p className="text-center text-grey text-desc">
          Note: You cannot edit the participants after the bracket has started.
          Reset the bracket to make changes.
        </p>
      ) : null}
    </div>
  );
};

export default ParticipantsPanel;
