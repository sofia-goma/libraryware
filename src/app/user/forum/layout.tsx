import { ReactNode } from "react";
import type { Metadata } from "next";
import Citation from "@/components/shared/citations";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "LibraryWare",
  description:
    "Access your LibraryWare account or get started with a seamless login experience to manage your online library effortlessly.",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div
      className={`flex justify-center items-center lg:justify-between lg:items-start ${inter.className}`}
    >
      <div className="flex-1">{children}</div>
      <div className="hidden lg:block h-dvh border-border w-[350px]">
        <Citation />
      </div>
    </div>
  );
}
