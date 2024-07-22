"use client";

import NavBar from "@/ui/navbar";
import Sidebar from "@/ui/sidebar";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { TbBook } from "react-icons/tb";
import { RiContactsLine } from "react-icons/ri";
import useAuth from "@/lib/auth";

const links = [
  {
    name: "Tableau de bord",
    href: ["/admin/dashboard", "/admin/dashboard/members"],
    icon: <IoHomeOutline size={"24px"} />,
  },
  {
    name: "Nos livres",
    href: ["/admin/books"],
    icon: <TbBook size={"24px"} />,
  },
  {
    name: "Membres",
    href: ["/admin/members"],
    icon: <RiContactsLine size={"24px"} />,
  },
  {
    name: "Setting",
    href: ["/user/setting"],
    icon: <IoSettingsOutline size={"24px"} />,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useAuth();
  return (
    <main className="bg-slate-100 w-screen h-screen">
      <NavBar />
      <div className="flex w-screen">
        <Sidebar links={links} />
        {children}
      </div>
    </main>
  );
}
