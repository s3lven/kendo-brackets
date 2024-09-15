import { Slot } from "@/types/bracket_t";
import { Input } from "@headlessui/react";


type ParticipantSlotViewProps = {
  slot: Slot;
};

const ParticipantSlotView = ({
  slot,
}: ParticipantSlotViewProps) => {
  return (
    <div className="w-full h-6" >
      <div
        className={`flex justify-center items-center gap-4 group`}
      >
        <div className="flex gap-1 items-center">
          <p className="w-4 text-desc text-grey text-center">{slot.sequence}</p>
        </div>
        <div className="flex justify-between items-center gap-2">
          <Input
            className="w-[215px] h-full border border-grey bg-neutral8 text-grey px-1"
            value={slot.player.name}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default ParticipantSlotView;
