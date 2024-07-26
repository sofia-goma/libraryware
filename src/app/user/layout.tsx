import NavBar from "@/ui/navbar";
import Sidebar from "@/ui/sidebar";
import {
  IoHome,
  IoHomeOutline,
  IoSettings,
  IoSettingsOutline,
} from "react-icons/io5";
import {
  MdForum,
  MdOutlineForum,
  MdOutlineWorkspaces,
  MdWorkspaces,
} from "react-icons/md";
import { IoIosNotifications, IoIosNotificationsOutline } from "react-icons/io";

const links = [
  {
    name: "Tableau de bord",
    href: "/user/dashboard",
    icon: <IoHomeOutline size={"24px"} />,
    icons: <IoHome size={"24px"} color="white" />,
  },
  {
    name: "Mon Espace",
    href: "/user/space",
    icon: <MdOutlineWorkspaces size={"24px"} />,
    icons: <MdWorkspaces size={"24px"} color="white" />,
  },
  {
    name: "Forum",
    href: "/user/forum",
    icon: <MdOutlineForum size={"24px"} />,
    icons: <MdForum size={"24px"} color="white" />,
  },
  {
    name: "Notification",
    href: "/user/notification",
    icon: <IoIosNotificationsOutline size={"24px"} />,
    icons: <IoIosNotifications size={"24px"} color="white" />,
  },
  {
    name: "Setting",
    href: "/user/setting",
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
      <div className="flex">
        <Sidebar links={links} />
        {children}
      </div>
    </main>
  );
}
