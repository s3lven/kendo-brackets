import { Button } from "@headlessui/react";
import { MouseEventHandler } from "react";

type EditorButtonProps = {
  text: string | JSX.Element;
  onClickHandler?: MouseEventHandler<HTMLButtonElement> | undefined;
  variant?: string
  className?: string
};

const buttonVariants: Record<string, string> = {
    "DEFAULT": "bg-secondary hover:bg-secondary/80",
    "no-outline": "hover:bg-neutral7"
}

const EditorButton = ({ text, onClickHandler, variant="DEFAULT", className }: EditorButtonProps) => {
  return (
    <Button
      className={`flex justify-center items-center px-5 py-1.5 text-white text-label uppercase rounded
        transtion-colors ease-in-out duration-150 ${className} outline-none
        ${buttonVariants[variant]}`}
      onClick={onClickHandler}
    >
      {text}
    </Button>
  );
};

export default EditorButton;
