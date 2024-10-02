// import Image from "next/image";

import EditorButton from "@/components/ui/editor-button";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center py-[120px] gap-16 bg-dark font-poppins">
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-headline text-center text-white">Never miss your next match</p>
            <p className="text-header text-center text-white ">Welcome to Taikai</p>
          </div>
          <p className="text-xl leading-8 tracking-wider text-center text-white text-pretty w-2/5">Taikai provides intuitive bracket creation, real-time match updates, and easy navigation to ensure your taikai  runs smoothly.</p>

        </div>
        <div className="flex gap-6">
          <EditorButton text={"Get Started"}/>
        </div>
      </div>
    </div>
  );
}
