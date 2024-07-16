import NavBar from "@/ui/navbar";
import Sidebar from "@/ui/sidebar";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineForum, MdOutlineWorkspaces } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TbBook } from "react-icons/tb";
import { RiContactsLine } from "react-icons/ri";

const links = [
  {
    name: "Tableau de bord",
    href: "/admin/dashboard",
    icon: <IoHomeOutline size={"24px"} />,
  },
  {
    name: "Nos livres",
    href: "/admin/books",
    icon: <TbBook size={"24px"} />,
  },
  {
    name: "Membres",
    href: "/admin/members",
    icon: <RiContactsLine size={"24px"} />,
  },
  {
    name: "Setting",
    href: "/user/setting",
    icon: <IoSettingsOutline size={"24px"} />,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-white w-screen h-screen bg-opacity-70">
      <NavBar />
      <div className="flex w-screen">
        <Sidebar links={links} />
        {children}
      </div>
    </main>
  );
}
