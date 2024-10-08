import EditorButton from "@/components/ui/editor-button";
import PlayProgress from "./components/play-panel/play-progress";

const PlayPanel = () => {
  console.log("PlayPanel rendered");
  return (
    <div className="w-full h-full flex flex-col gap-2.5 p-4">
      {/* Bracket Status */}
      <p className="text-grey text-label uppercase w-fit">bracket status</p>
      <div className="w-full flex flex-col gap-8 px-2 py-4 bg-shade2_30 shadow rounded-sm">
        <PlayProgress />
      </div>

      {/* Changes */}
      {/* TODO: Hook up this feature to save on a database */}
      <div className="w-full flex flex-col gap-8 px-2 py-4 bg-shade2_30 shadow rounded-sm">
        <div className="w-full pb-2 border-b border-neutral8 ">
          <p className="text-desc text-center text-grey">Changes Unsaved</p>
        </div>
        <p className="text-desc text-center text-grey">
          Save your changes to make sure your work doesn&apos;t disappear!
        </p>
        <div className="flex justify-center items-center">
          <EditorButton text="save changes" />
        </div>
      </div>

      {/* Bracket Status */}
      <div className="w-full flex flex-col gap-4 px-2 py-4 bg-shade2_30 shadow rounded-sm">
        {/* <div className="w-full pb-2 border-b border-neutral8 ">
          <p className="text-desc text-center text-grey">Share your bracket</p>
        </div> */}
        <p className="text-desc text-center text-grey">
          Let others know about your bracket!
        </p>
        <div className="flex justify-center items-center">
          <EditorButton text="share" />
        </div>
      </div>
    </div>
  );
};

export default PlayPanel;
