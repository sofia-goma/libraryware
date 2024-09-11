"use client";
import { ReactNode } from "react";
import { useAuth } from "@/providers/auth-provider";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "@/components/shared/loading";

function NotificationsLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { user } = useAuth();
  return <div>{children}</div>;
}

export default withAuthenticationRequired(NotificationsLayout, {
  onRedirecting: () => <Loading />,
});
