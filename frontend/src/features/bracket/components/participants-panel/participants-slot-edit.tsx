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

  const [inputValue, setInputValue] = useState(slot.name);
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
    [updatePlayerName],
  );

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue); // Update local state immediately
    debouncedUpdateName(slot.id, newValue); // Debounce the store update
  };

  return (
    <div className="h-6 w-full" ref={setNodeRef} style={parentStyles}>
      <div
        ref={setActivatorNodeRef}
        className={`${
          isDragging || forceDragging ? "cursor-grabbing" : "cursor-grab"
        } group flex items-center justify-between gap-4`}
        {...attributes}
        {...listeners}
      >
        <div className="flex items-center gap-1">
          <TbGripVertical className="text-neutral6" size={"1.5rem"} />
          <p className="text-desc text-grey w-4 text-center">{slot.sequence}</p>
        </div>
        <div className="flex items-center justify-between gap-2">
          <Input
            className="border-grey bg-neutral8 text-grey h-full w-[215px] border px-1"
            value={inputValue}
            onChange={handleChangeName}
          />
          <Button
            className="text-grey flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
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
