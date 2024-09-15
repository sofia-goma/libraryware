import { ReactNode } from "react";
import type { Metadata } from "next";
import { BookmarkNav } from "@/components/bookmark/bookmark-nav";
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
    <>
      <BookmarkNav />
      <div>{children}</div>
    </>
  );
}
