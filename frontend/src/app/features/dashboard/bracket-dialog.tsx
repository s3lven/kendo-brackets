"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Tournament } from "@/types/bracket_t";
import dynamic from "next/dynamic";

type BracketDialogProps = {
  item: Tournament;
};

const LazyBracketList = dynamic(() => import("./bracket-list"));

const BracketDialog = ({ item }: BracketDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <div
          className="w-[392px] h-[210px] flex flex-col items-center justify-center 
            bg-slate-300 hover:bg-slate-400 font-poppins cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {item.tournamentName}
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-shade2/60 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content
          className="w-full max-w-[680px] h-full max-h-[75vh] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
            flex flex-col items-center justify-center p-4
            data-[state=open]:animate-contentShow 
            focus:outline-none shadow-lg bg-neutral8 font-poppins"
        >
          <Dialog.Title className="text-white text-lead border-b border-white px-4 py-2 w-full">
            {item.tournamentName}
          </Dialog.Title>
          {isOpen && <LazyBracketList item={item} />}
          <Dialog.Close asChild>
            <button
              className="absolute top-4 right-4 text-white hover:bg-shade2_30 focus:outline-none p-1 rounded-full"
            >
              <X size={"1rem"} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default BracketDialog;
