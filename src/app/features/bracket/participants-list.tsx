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
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import ParticipantSlot from "./participants-slot";
import { useSlotStore } from "./stores/slots-store";

const DnDContextWithNoSSR = dynamic(
  () => import("@dnd-kit/core").then((mod) => mod.DndContext),
  { ssr: false }
);

type ParticipantsListProps = {
  // bracketParticipants: Slot[];
};

const ParticipantsList = ({}: ParticipantsListProps) => {
  const slots = useSlotStore((state) => state.slots);
  const removeSlot = useSlotStore((state) => state.removeSlot);
  const moveSlot = useSlotStore((state) => state.moveSlot);
  const [activeSlot, setActiveSlot] = useState<Slot | undefined>(undefined);

  // Detect input method
  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor));

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
      moveSlot(activeIndex, overIndex);
    }

    setActiveSlot(undefined);
  };

  const handleDragCancel = () => {
    setActiveSlot(undefined);
  };

  return slots?.length ? (
    <div className="flex flex-col gap-2">
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
    </div>
  ) : null;
};

export default ParticipantsList;
