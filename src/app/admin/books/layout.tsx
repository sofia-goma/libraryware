import { ReactNode } from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LibraryWare",
  description:
    "An innovative platform for managing and sharing your online library, making it easier to discover, bookmark, and discuss your favorite books.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <div className={inter.className}>{children}</div>;
}
