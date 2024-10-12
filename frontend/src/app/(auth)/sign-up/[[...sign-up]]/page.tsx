import { SignUp } from "@clerk/nextjs";
// import Link from "next/link";

const RegisterPage = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-shade2 text-header text-center">Register</h1>
        <p className="text-shade2 text-article-2 text-center">
          Sign up and start managing your taikai.
        </p>
      </div>
      <SignUp />
      {/* <span className="text-paragraph">
        Already have an account?&nbsp;
        <Link href={"/sign-in"} className="text-secondary hover:underline">
          Sign in now
        </Link>
      </span> */}
    </>
  );
};

export default RegisterPage;
