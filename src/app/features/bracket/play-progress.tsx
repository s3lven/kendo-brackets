import EditorButton from "@/components/ui/editor-button";
import React from "react";
import { useBracketStore } from "./stores/bracket-store";
import * as Progress from "@radix-ui/react-progress";

const PlayProgress = () => {
  const bracketStatus = useBracketStore((state) => state.bracket.status);
  const progress = useBracketStore((state) => state.bracket.progress);
  const runBracket = useBracketStore((state) => state.runBracket);
  const resetBracket = useBracketStore((state) => state.resetBracket);
  const completeBracket = useBracketStore((state) => state.completeBracket);
  const openBracket = useBracketStore((state) => state.openBracket);
  const testBracket = useBracketStore((state) => state.testBracket);
  return (
    <>
      <div className="w-full pb-2 border-b border-neutral8 ">
        <p className="text-desc text-center text-grey">{bracketStatus}</p>
      </div>
      {bracketStatus === "Editing" ? (
        <p className="text-desc text-center text-grey">
          Ready to go? Click &quot;Start Tournament&quot; to start reporting
          scores:
        </p>
      ) : (
        <Progress.Root
          className="relative overflow-hidden bg-neutral7 border border-neutral6 rounded-lg w-full h-8"
          style={{
            //Fix overflowing clipping in Safari
            transform: "translateZ(0)",
          }}
          value={progress}
        >
          <Progress.Indicator
            className={`bg-green transition-[width] duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]
                h-full flex justify-center items-center text-white text-label text-center
                ${progress === 0 && "translate-x-5"}`}
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </Progress.Indicator>
        </Progress.Root>
      )}

      <div className="flex flex-col justify-center items-center gap-2">
        {bracketStatus === "Editing" ? (
          <EditorButton text="start tournament" onClickHandler={runBracket} />
        ) : (
          <>
            {progress === 100 && bracketStatus === "In Progress" && (
              <EditorButton
                variant={"no-outline"}
                text="mark as complete"
                onClickHandler={completeBracket}
              />
            )}
            {bracketStatus === "Completed" && (
              <EditorButton
                variant="no-outline"
                text="reopen bracket"
                onClickHandler={openBracket}
              />
            )}
            <EditorButton
              variant={"no-outline"}
              text="reset bracket"
              onClickHandler={resetBracket}
            />
          </>
        )}
        {/* Button to test the progress bar */}
        <EditorButton
          variant="no-outline"
          text="add half"
          onClickHandler={testBracket}
        />
      </div>
    </>
  );
};

export default PlayProgress;
