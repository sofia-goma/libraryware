"use client";
import { ReactNode } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Loading } from "@/components/bookmark/loading";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
function NotificationsLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <div className={inter.className}>{children}</div>;
}

export default withAuthenticationRequired(NotificationsLayout, {
  onRedirecting: () => <Loading />,
});
