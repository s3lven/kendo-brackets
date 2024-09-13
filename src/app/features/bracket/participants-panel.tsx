"use client";

import ParticipantsList from "./participants-list";
import { Shuffle } from "lucide-react";
import EditorButton from "@/components/ui/editor-button";
import { useBracketStatus, useCombinedStore } from "./stores/bracket-view-store";

const ParticipantsPanel = () => {
  const { addSlot, shuffleSlots } = useCombinedStore()
  const bracketStatus = useBracketStatus()

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
