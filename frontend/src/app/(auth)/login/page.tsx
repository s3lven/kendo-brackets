import AuthButton from "@/components/ui/auth-button";
import { Input } from "@headlessui/react";
import Link from "next/link";

const LoginPage = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-shade2 text-header text-center">Login</h1>
        <p className="text-shade2 text-article-2 text-center">
          To get started, you need to sign in here.
        </p>
      </div>
      <form className="w-[350px] flex flex-col justify-center items-center gap-4 px-4 py-8 rounded-xl shadow bg-white">
        {/* Email */}
        <div className="w-full flex flex-col gap-2">
          <h3 className="text-desc font-bold text-shade2">Email</h3>
          <Input
            className="w-full flex flex-col gap-1 px-3 py-4 border border-text rounded-lg text-button-sm"
            placeholder="john@email.com"
            type="email"
          />
        </div>
        {/* Password */}
        <div className="w-full flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h3 className="text-desc font-bold text-shade2">Password</h3>
            <Link
              href={"/reset"}
              className="text-secondary hover:underline text-desc"
            >
              Forget Password?
            </Link>
          </div>
          <Input
            className="w-full flex flex-col gap-1 px-3 py-4 border border-text rounded-lg text-button-sm"
            type="password"
            placeholder="Password"
          />
        </div>
        {/* Sign In */}
        <AuthButton>Sign In</AuthButton>
      </form>
      <span className="text-paragraph">
        Don&apos;t have an account?&nbsp;
        <Link href={"/register"} className="text-secondary hover:underline">
          Create an account
        </Link>
      </span>
    </>
  );
};

export default LoginPage;
