import LoginForm from "@/features/auth/components/login-form";
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
      <LoginForm />
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
