import { Button } from "@headlessui/react";
import { MouseEventHandler } from "react";

type AuthButtonProps = {
  children: JSX.Element | string;
  onClickHandler?: MouseEventHandler<HTMLButtonElement> | undefined;
};

const AuthButton = ({ children, onClickHandler }: AuthButtonProps) => {
  return (
    <Button
      className="w-full py-4 bg-secondary rounded-lg text-desc text-white hover:bg-secondary/95 transition-colors"
      onClick={onClickHandler}
    >
      {children}
    </Button>
  );
};

export default AuthButton;
