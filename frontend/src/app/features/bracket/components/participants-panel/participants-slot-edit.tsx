import { Slot } from "@/types/bracket_t";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { Button, Input } from "@headlessui/react";
import { TbGripVertical } from "react-icons/tb";
import { X } from "lucide-react";
import { useCallback, useState } from "react";
import { debounce } from "lodash";
import { useSlotStore } from "../../stores/slots-store";

type ParticipantSlotEditProps = {
  slot: Slot;
  removeSlot: (id: number | string) => void;
  forceDragging?: boolean;
};

const ParticipantSlotEdit = ({
  slot,
  removeSlot,
  forceDragging = false,
}: ParticipantSlotEditProps) => {
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
  } = useSortable({
    id: slot.sequence,
  });

  const parentStyles = {
    transform: CSS.Transform.toString(transform),
    transition: transition || undefined,
    opacity: isDragging ? "0.4" : "1",
  };

  const [inputValue, setInputValue] = useState(slot.player.name);
  const updatePlayerName = useSlotStore((state) => state.updatePlayerName);

  const handleRemoveSlot = () => {
    // console.log("button clicked", slot.id);
    removeSlot(slot.id);
  };

  // Debounced function to update the store
  const debouncedUpdateName = useCallback(
    debounce((id: number | string, name: string) => {
      updatePlayerName(id, name);
    }, 300),
    [updatePlayerName]
  );

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue); // Update local state immediately
    debouncedUpdateName(slot.id, newValue); // Debounce the store update
  };

  return (
    <div className="w-full h-6" ref={setNodeRef} style={parentStyles}>
      <div
        ref={setActivatorNodeRef}
        className={`${
          isDragging || forceDragging ? "cursor-grabbing" : "cursor-grab"
        } flex justify-between items-center gap-4 group`}
        {...attributes}
        {...listeners}
      >
        <div className="flex gap-1 items-center">
          <TbGripVertical className="text-neutral6" size={"1.5rem"} />
          <p className="w-4 text-desc text-grey text-center">{slot.sequence}</p>
        </div>
        <div className="flex justify-between items-center gap-2">
          <Input
            className="w-[215px] h-full border border-grey bg-neutral8 text-grey px-1"
            value={inputValue}
            onChange={handleChangeName}
          />
          <Button
            className="flex items-center justify-center text-grey
                opacity-0 transition-opacity ease-in-out duration-300 group-hover:opacity-100"
            onMouseDown={handleRemoveSlot}
          >
            <X size={"1rem"} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ParticipantSlotEdit;
