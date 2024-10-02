import AuthButton from "@/components/ui/auth-button";
import { Input } from "@headlessui/react";
import Link from "next/link";
import React from "react";

const RegisterPage = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-shade2 text-header text-center">Register</h1>
        <p className="text-shade2 text-article-2 text-center">
          Sign up and start managing your taikai.
        </p>
      </div>
      <form className="w-[350px] flex flex-col justify-center items-center gap-4 px-4 py-8 rounded-xl shadow bg-white">
        {/* First Name */}
        <div className="w-full flex flex-col gap-2">
          <h3 className="text-desc font-bold text-shade2">First Name</h3>
          <Input
            className="w-full flex flex-col gap-1 px-3 py-4 border border-text rounded-lg text-button-sm"
            placeholder="John"
          />
        </div>
        {/* Last Name */}
        <div className="w-full flex flex-col gap-2">
          <h3 className="text-desc font-bold text-shade2">Last Name</h3>
          <Input
            className="w-full flex flex-col gap-1 px-3 py-4 border border-text rounded-lg text-button-sm"
            placeholder="Doe"
          />
        </div>
        {/* Dojo */}
        {/* TODO: Switch to Select */}
        <div className="w-full flex flex-col gap-2">
          <h3 className="text-desc font-bold text-shade2">Dojo</h3>
          <Input
            className="w-full flex flex-col gap-1 px-3 py-4 border border-text rounded-lg text-button-sm"
            placeholder="ABC Kendo Dojo"
          />
        </div>
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
          <h3 className="text-desc font-bold text-shade2">Password</h3>
          <Input
            className="w-full flex flex-col gap-1 px-3 py-4 border border-text rounded-lg text-button-sm"
            type="password"
            placeholder="Password"
          />
        </div>
        {/* Confirm Password */}
        <div className="w-full flex flex-col gap-2">
          <h3 className="text-desc font-bold text-shade2">Confirm Password</h3>
          <Input
            className="w-full flex flex-col gap-1 px-3 py-4 border border-text rounded-lg text-button-sm"
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        {/* Sign In */}
        <AuthButton>Sign In</AuthButton>
      </form>
      <span className="text-paragraph">
        Already have an account?&nbsp;
        <Link href={"/login"} className="text-secondary hover:underline">
          Sign in now
        </Link>
      </span>
    </>
  );
};

export default RegisterPage;
