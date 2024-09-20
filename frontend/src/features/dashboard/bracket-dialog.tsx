import * as Dialog from "@radix-ui/react-dialog";
import { User, X } from "lucide-react";
import { Tournament } from "@/types/bracket_t";
import dynamic from "next/dynamic";
import EditorButton from "@/components/ui/editor-button";
import Link from "next/link";

type BracketDialogProps = {
  item: Tournament;
};

const LazyBracketList = dynamic(() => import("./bracket-list"), {
  loading: () => <LoadingBracketList />,
});

const LoadingBracketList = () => {
  return (
    <div className="w-full h-full flex-grow flex flex-col justify-start gap-2 px-2 py-9 overflow-y-auto scrollbar-thin scrollbar-webkit">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="rounded-lg bg-shade2 flex justify-between px-4 py-4 shadow-lg">
            <div className="flex flex-col justify-center items-start">
              <div className="h-4 w-32 bg-shade2_30 rounded mb-2"></div>
              <div className="h-4 w-24 bg-shade2_30 rounded"></div>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-4 w-16 bg-shade2_30 rounded"></div>
            </div>
            <div className="flex gap-4 justify-center items-center">
              <div className="flex gap-1 justify-center items-center pr-[56px]">
                <div className="h-4 w-8 bg-shade2_30 rounded"></div>
                <User className="text-shade2_30" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const BracketDialog = ({ item }: BracketDialogProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div
          className="w-[392px] h-[210px] flex flex-col items-center justify-center 
            bg-slate-300 hover:bg-slate-400 font-poppins cursor-pointer"
        >
          {item.tournamentName}
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-shade2/60 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content
          className="w-full max-w-[680px] h-full max-h-[75vh] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
            flex flex-col items-center justify-center p-4 pt-8
            data-[state=open]:animate-contentShow 
            focus:outline-none shadow-lg bg-neutral8 font-poppins"
          aria-describedby={undefined}
        >
          <Dialog.Title asChild>
            <div className="text-white text-lead border-b border-white px-4 py-2 w-full flex items-center justify-between">
              {item.tournamentName}
              <Link href={`/bracket/new`}>
                <EditorButton text={"New Bracket"} variant="no-outline" />
              </Link>
            </div>
          </Dialog.Title>
          <LazyBracketList item={item} />
          <Dialog.Close asChild>
            <button className="absolute top-4 right-4 text-white hover:bg-shade2_30 focus:outline-none p-1 rounded-full">
              <X size={"1rem"} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default BracketDialog;
