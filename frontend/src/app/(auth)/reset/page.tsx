import AuthButton from "@/components/ui/auth-button";
import { Input } from "@headlessui/react";
import Link from "next/link";

const ResetPasswordPage = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-shade2 text-header text-center">Reset Password</h1>
        <p className="text-shade2 text-article-2 text-center">
          Enter your email to get a reset link.
        </p>
      </div>
      <div className="w-[350px] flex flex-col justify-center items-center gap-4 px-4 py-8 rounded-xl shadow bg-white">
        {/* Email */}
        <form className="w-full flex flex-col gap-2">
          <h3 className="text-desc font-bold text-shade2">Email</h3>
          <Input
            className="w-full flex flex-col gap-1 px-3 py-4 border border-text rounded-lg text-button-sm"
            placeholder="john@email.com"
            type="email"
          />
        </form>
        {/* Send reset link */}
        <AuthButton>Send reset link</AuthButton>
      </div>
      <span className="text-paragraph">
        Remember your password?&nbsp;
        <Link href={"/login"} className="text-secondary hover:underline">
          Sign In Now
        </Link>
      </span>
    </>
  );
};

export default ResetPasswordPage;
