"use client";

import { Slot } from "@/types/bracket_t";
import {
  DragEndEvent,
  DragStartEvent,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  closestCenter,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Button, Input } from "@headlessui/react";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { TbGripVertical } from "react-icons/tb";
import { CSS } from "@dnd-kit/utilities";
import { X } from "lucide-react";

const DnDContextWithNoSSR = dynamic(
  () => import("@dnd-kit/core").then((mod) => mod.DndContext),
  { ssr: false }
);

type ParticipantsPanelProps = {
  bracketParticipants: Slot[];
};

type ParticipantSlotProps = {
  slot: Slot;
  removeSlot: (id: number) => void;
  forceDragging?: boolean;
};

const ParticipantSlot = ({
  slot,
  removeSlot,
  forceDragging,
}: ParticipantSlotProps) => {
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
    // lineHeight: "4",
  };

  return (
    <div className="w-full h-6" ref={setNodeRef} style={parentStyles}>
      <div
        ref={setActivatorNodeRef}
        className={`${
          isDragging || forceDragging ? "grabbing" : "grab"
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
            value={slot.player.name}
          />
          <Button
            className="flex items-center justify-center text-grey
              opacity-0 transition-opacity ease-in-out duration-300 group-hover:opacity-100"
            onClick={() => removeSlot(slot.id)}
          >
            <X size={"1rem"} />
          </Button>
        </div>
      </div>
    </div>
  );
};

const ParticipantsList = ({ bracketParticipants }: ParticipantsPanelProps) => {
  const [slots, setSlots] = useState(bracketParticipants);
  const [activeSlot, setActiveSlot] = useState<Slot | undefined>(undefined);

  // Detect input method
  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor));

  const removeSlot = (id: number) => {
    const updated = slots
      .filter((slot) => slot.id !== id)
      .map((slot, index) => ({ ...slot, sequence: index + 1 }));
    setSlots(updated);
  };

  // Trigger when dragging starts
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    setActiveSlot(slots?.find((slot) => slot.sequence === active.id));
  };

  // Trigger when dragging ends
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const activeSlot = slots.find((slot) => slot.sequence === active.id);
    const overSlot = slots.find((slot) => slot.sequence === over.id);

    if (!activeSlot || !overSlot) return;

    const activeIndex = slots.findIndex((slot) => slot.sequence === active.id);
    const overIndex = slots.findIndex((slot) => slot.sequence === over.id);

    if (activeIndex !== overIndex) {
      setSlots((prev) => {
        const updated = arrayMove(prev, activeIndex, overIndex).map(
          (slot, index) => ({ ...slot, sequence: index + 1 })
        );
        return updated;
      });
    }

    setActiveSlot(undefined);
  };

  const handleDragCancel = () => {
    setActiveSlot(undefined);
  };

  return (
    <div className="w-full flex flex-col gap-2 px-2 py-4 bg-shade2_30 shadow rounded-sm">
      {slots?.length ? (
        <DnDContextWithNoSSR
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragCancel={handleDragCancel}
        >
          <SortableContext
            items={slots.map((slot) => slot.sequence)}
            strategy={verticalListSortingStrategy}
          >
            {slots.map((slot) => (
              <ParticipantSlot
                key={slot.id}
                slot={slot}
                removeSlot={removeSlot}
              />
            ))}
          </SortableContext>
          <DragOverlay adjustScale className="origin-[0%_0%]">
            {activeSlot ? (
              <ParticipantSlot
                slot={activeSlot}
                removeSlot={removeSlot}
                forceDragging
              />
            ) : null}
          </DragOverlay>
        </DnDContextWithNoSSR>
      ) : null}
    </div>
  );
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
