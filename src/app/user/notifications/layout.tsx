"use client";
import { ReactNode } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "@/components/shared/loading";

function NotificationsLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <div>{children}</div>;
}

export default withAuthenticationRequired(NotificationsLayout, {
  onRedirecting: () => <Loading />,
});
