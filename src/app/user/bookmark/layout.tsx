import { ReactNode } from "react";
import type { Metadata } from "next";
import { BookmarkNav } from "@/components/bookmark/bookmark-nav";

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
    <div className={inter.className}>
      <BookmarkNav />
      <div>{children}</div>
    </div>
  );
}
