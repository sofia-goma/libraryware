import { ReactNode } from "react";
import type { Metadata } from "next";
import Citation from "@/components/shared/citations";

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
    <div className="flex justify-between">
      <div>{children}</div>
      <div className="hidden lg:block h-dvh border-border max-w-[350px]">
        <Citation />
      </div>
    </div>
  );
}
