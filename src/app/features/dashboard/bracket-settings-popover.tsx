"use client"

import * as Popover from "@radix-ui/react-popover";

import {
  CopyPlus,
  EllipsisVertical,
  Pencil,
  Settings2,
  Trash,
} from "lucide-react";

type BracketSettingsPopoverProps = {
  name: string;
};

const BracketSettingsPopover = ({ name }: BracketSettingsPopoverProps) => {
  return (
    <Popover.Root modal>
      <Popover.Trigger asChild>
        <div
          className="transition-opacity ease-in-out duration-300 opacity-0 group-hover:opacity-100
            p-2 rounded-full hover:bg-shade2 hover:shadow-md"
        >
          <EllipsisVertical />
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side="right"
          className="rounded-lg bg-neutral7 w-[220px] focus:outline-none shadow-lg pt-2 flex flex-col divide-y divide-shade2 outline outline-1 outline-shade2 text-white"
        >
          <p className="px-4 py-2">{name}</p>
          <div className="py-2 flex flex-col gap-1">
            <div className="hover:bg-neutral8 px-4 py-2 flex items-center gap-2">
              <Settings2 size={"1rem"} /> Edit
            </div>
            <div className="hover:bg-neutral8 px-4 py-2 flex items-center gap-2">
              <Pencil size={"1rem"} />
              Rename
            </div>
            <div className="hover:bg-neutral8 px-4 py-2 flex items-center gap-2">
              <CopyPlus size={"1rem"} />
              Duplicate
            </div>
            <div className="hover:bg-neutral8 px-4 py-2 flex items-center gap-2">
              <Trash size={"1rem"} />
              Delete
            </div>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default BracketSettingsPopover;
