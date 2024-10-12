// import LoginForm from "@/features/auth/components/login-form";
import { SignIn } from "@clerk/nextjs";
// import Link from "next/link";

const LoginPage = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-shade2 text-header text-center">Login</h1>
        <p className="text-shade2 text-article-2 text-center">
          Welcome back! Please sign in to continue.
        </p>
      </div>
      <SignIn />
      {/* 
        Uncomment this when Clerk elements are ready for production
        <LoginForm /> 
      */}
      {/* <span className="text-paragraph">
        Don&apos;t have an account?&nbsp;
        <Link href={"/sign-up"} className="text-secondary hover:underline">
          Create an account
        </Link>
      </span> */}
    </>
  );
};

export default LoginPage;
