"use client";

import { Slot } from "@/types/bracket_t";
import {
  closestCenter,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import ParticipantSlot from "./participants-slot";

const DnDContextWithNoSSR = dynamic(
  () => import("@dnd-kit/core").then((mod) => mod.DndContext),
  { ssr: false }
);

type ParticipantsListProps = {
  bracketParticipants: Slot[];
};

const ParticipantsList = ({ bracketParticipants }: ParticipantsListProps) => {
  const [slots, setSlots] = useState(bracketParticipants);
  const [activeSlot, setActiveSlot] = useState<Slot | undefined>(undefined);

  console.log(slots)
  // Detect input method
  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor));

  const removeSlot = (id: number) => {
    const updated = slots.filter((slot) => slot.id !== id)
      .map((slot, index) => ({ ...slot, sequence: index + 1 }));
      console.log(id)
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

export default ParticipantsList;
