import { CircleUser } from "lucide-react";
import Link from "next/link";

type NavigationItem = {
  name: string;
  to: string;
  icon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

const navigation: NavigationItem[] = [
  {
    name: "Dashboard",
    to: "/dashboard",
  },
  {
    name: "Explore",
    to: "/explore",
  },
  {
    name: "Profile",
    to: "/profile",
    icon: CircleUser,
  },
];
const DashboardNav = () => {
  return (
    <nav className="w-full h-[72px] bg-dark">
      <div className="h-full flex justify-between items-center px-[108px] py-2">
        <Link href="/" className="h-full flex items-center justify-center">
          <p className="font-poppins font-bold text-2xl leading-6 tracking-[0.15px] text-white">
            Taikai
          </p>
        </Link>
        <div className="flex gap-12">
          {navigation.map((item) => {
            if (!item.icon)
              return (
                <Link
                  key={item.name}
                  className="flex items-center justify-center"
                  href={item.to}
                >
                  <p className="text-white text-article">{item.name}</p>
                </Link>
              );
            else
              return (
                <Link
                  key={item.name}
                  className="flex items-center justify-center"
                  href={item.to}
                >
                  <item.icon className="text-white size-[40px]" />
                </Link>
              );
          })}
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
