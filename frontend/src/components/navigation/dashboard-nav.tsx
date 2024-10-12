import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
    UserButton,
} from "@clerk/nextjs";
import { Button } from "@headlessui/react";
import Link from "next/link";

const DashboardNav = () => {
    return (
        <nav className="bg-dark h-[72px] w-full">
            <div className="flex h-full items-center justify-between px-[108px] py-2">
                <Link
                    href="/"
                    className="flex h-full items-center justify-center"
                >
                    <p className="font-poppins text-2xl font-bold leading-6 tracking-[0.15px] text-white">
                        Taikai
                    </p>
                </Link>
                <div className="flex gap-12">
                    <SignedIn>
                        <Link
                            className="flex items-center justify-center"
                            href={"/dashboard"}
                        >
                            <p className="text-article text-white">Dashboard</p>
                        </Link>
                    </SignedIn>
                    <Link
                        className="flex items-center justify-center"
                        href={"/explore"}
                    >
                        <p className="text-article text-white">Explore</p>
                    </Link>
                    <SignedOut>
                        <SignInButton>
                            <Button className="font-poppins text-article text-white">
                                Login
                            </Button>
                        </SignInButton>
                        <SignUpButton>
                            <Button className="font-poppins text-button-md w-[100px] rounded-full border border-white py-2 text-white">
                                Sign Up
                            </Button>
                        </SignUpButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </nav>
    );
};

export default DashboardNav;
