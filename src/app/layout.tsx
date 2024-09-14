import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import DashboardNav from "@/components/navigation/dashboard-nav";

const poppins = localFont({
  src: [
    { path: "../assets/fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "../assets/fonts/Poppins-Italic.ttf", weight: "400", style: "italic" },
    { path: "../assets/fonts/Poppins-Medium.ttf", weight: "500", style: "normal" },
    {
      path: "../assets/fonts/Poppins-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    { path: "../assets/fonts/Poppins-Bold.ttf", weight: "700", style: "normal" },
    { path: "../assets/fonts/Poppins-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="flex flex-col h-screen">
        <DashboardNav />
        <div className="w-full h-full flex-1 overflow-auto">{children}</div>
      </body>
    </html>
  );
}
