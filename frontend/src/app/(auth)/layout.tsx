import AuthNav from "@/components/navigation/auth-nav";
import "../globals.css";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-full flex flex-col font-poppins overflow-auto no-scrollbar">
      <div className="flex-0 flex justify-center">
        <AuthNav />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center gap-20 px-[108px] py-[120px] bg-dark_90">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
