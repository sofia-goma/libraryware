import NavBar from "@/ui/navbar";
import Sidebar from "@/ui/sidebar";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineForum, MdOutlineWorkspaces } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";

const links = [
  {
    name: "Tableau de bord",
    href: "/user/dashboard",
    icon: <IoHomeOutline size={"24px"} />,
  },
  {
    name: "Mon Espace",
    href: "/user/space",
    icon: <MdOutlineWorkspaces size={"24px"} />,
  },
  {
    name: "Forum",
    href: "/user/forum",
    icon: <MdOutlineForum size={"24px"} />,
  },
  {
    name: "Notification",
    href: "/user/notification",
    icon: <IoIosNotificationsOutline size={"24px"} />,
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
    <main className="bg-[#f2efdd] w-screen h-screen bg-opacity-70">
      <NavBar />
      <div className="flex">
        <Sidebar links={links} />
        {children}
      </div>
    </main>
  );
}
