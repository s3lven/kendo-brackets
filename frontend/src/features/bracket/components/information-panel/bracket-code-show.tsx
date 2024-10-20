"use client"

import { Button, Input } from "@headlessui/react";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useBracketStore } from "../../stores/bracket-store";
import { useShallow } from "zustand/react/shallow";

const BracketCodeShow = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { bracketCode } = useBracketStore(
    useShallow((state) => ({ bracketCode: state.bracketCode }))
  );

  console.log("BracketCodeShow render");
  return (
    <div className="w-full h-full flex flex-wrap justify-between ">
      <p className="text-grey text-desc">Bracket Code</p>
      <div
        className="w-[160px] h-full px-1 bg-transparent font-poppins text-grey text-desc
                flex justify-between items-center"
      >
        <Input
          className="w-full h-full bg-transparent"
          value={showPassword ? bracketCode : "aaaaaaaaaaaa"}
          type={showPassword ? "text" : "password"}
          readOnly
        />
        <Button className="" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <Eye size={"1rem"} /> : <EyeOff size={"1rem"} />}
        </Button>
      </div>
    </div>
  );
};

export default BracketCodeShow;
