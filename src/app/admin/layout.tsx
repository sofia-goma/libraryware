"use client";
import NavBar from "@/components/shared/navbar";
import Sidebar from "@/components/layouts/sidebar";
import {
  IoBook,
  IoBookOutline,
  IoHome,
  IoHomeOutline,
  IoSettings,
  IoSettingsOutline,
} from "react-icons/io5";
import { RiContactsFill, RiContactsLine } from "react-icons/ri";

const links = [
  {
    name: "Tableau de bord",
    href: ["/admin/dashboard", "/admin/dashboard/members"],
    icon: <IoHomeOutline size={"24px"} />,
    icons: <IoHome size={"24px"} color="white" />,
  },
  {
    name: "Nos livres",
    href: [
      "/admin/books",
      "/admin/books/overdue",
      "/admin/books/borrowed",
      "/admin/books/available",
      "/admin/books/reserve",
    ],
    icon: <IoBookOutline size={"24px"} />,
    icons: <IoBook size={"24px"} color="white" />,
  },
  {
    name: "Membres",
    href: [
      "/admin/membres",
      "/admin/membres/overdue",
      "/admin/membres/borrowed",
      "/admin/membres/available",
      "/admin/membres/reserve",
    ],
    icon: <RiContactsLine size={"24px"} />,
    icons: <RiContactsFill size={"24px"} color="white" />,
  },
  {
    name: "Paramètres",
    href: ["#"],
    icon: <IoSettingsOutline size={"24px"} />,
    icons: <IoSettings size={"24px"} color="white" />,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-[#3c596822] w-screen h-screen">
      <NavBar />
      <div className="flex w-screen">
        <Sidebar links={links} />
        {children}
      </div>
    </main>
  );
}
