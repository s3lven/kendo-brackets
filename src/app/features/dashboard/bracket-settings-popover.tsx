"use client";

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
            p-2 rounded-full hover:bg-neutral8 hover:shadow-md
            absolute top-[18px] right-2"
        >
          <EllipsisVertical />
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side="right"
          className="rounded-lg bg-neutral8 w-[220px] focus:outline-none shadow-lg pt-2 flex flex-col divide-y divide-shade2
            outline outline-1 outline-shade2 text-button-sm text-white font-poppins"
        >
          <p className="px-4 py-2">{name}</p>
          <div className="flex flex-col gap-1">
            <div className="hover:bg-neutral7 px-4 py-2 flex items-center gap-2.5 cursor-pointer">
              <Settings2 size={"1.2rem"} /> Edit
            </div>
            <div className="hover:bg-neutral7 px-4 py-2 flex items-center gap-2.5  cursor-pointer">
              <Pencil size={"1.2rem"} />
              Rename
            </div>
            <div className="hover:bg-neutral7 px-4 py-2 flex items-center gap-2.5 cursor-pointer">
              <CopyPlus size={"1.2rem"} />
              Duplicate
            </div>
            <div className="hover:bg-neutral7 px-4 py-2 flex items-center gap-2.5 rounded-b-lg cursor-pointer">
              <Trash size={"1.2rem"} />
              Delete
            </div>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default BracketSettingsPopover;
