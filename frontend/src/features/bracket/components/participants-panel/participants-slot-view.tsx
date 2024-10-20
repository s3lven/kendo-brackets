import { Slot } from "@/types/bracket_t";
import { Input } from "@headlessui/react";

type ParticipantSlotViewProps = {
  slot: Slot;
};

const ParticipantSlotView = ({ slot }: ParticipantSlotViewProps) => {
  return (
    <div className="h-6 w-full">
      <div className={`group flex items-center justify-center gap-4`}>
        <div className="flex items-center gap-1">
          <p className="text-desc text-grey w-4 text-center">{slot.sequence}</p>
        </div>
        <div className="flex items-center justify-between gap-2">
          <Input
            className="border-grey bg-neutral8 text-grey h-full w-[215px] border px-1"
            value={slot.name}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default ParticipantSlotView;
