"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import getFormattedInitials from "@/lib/get-formatted-initials";
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import {
  Bell,
  Home,
  Menu,
  InboxIcon,
  Bookmark,
  User,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import Logo from "@/components/shared/logo";
import NavLinks from "@/components/shared/navlinks";
import ModeToggle from "@/components/shared/mode-toggle";
import { Loading } from "@/components/bookmark/loading";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/providers/auth-provider";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
import SearchField from "@/components/shared/search-field";

const links = [
  { name: "Dashboard", href: ["/user"], icon: <Home className="h-4 w-4" /> },
  {
    name: "Forum",
    href: ["/user/forum"],
    icon: <InboxIcon className="h-4 w-4" />,
  },
  {
    name: "Bookmark",
    href: ["/user/bookmark"],
    icon: <Bookmark className="h-4 w-4" />,
  },
  {
    name: "Notifications",
    href: ["/user/notifications"],
    icon: <Bell className="h-4 w-4" />,
  },
  {
    name: "Profile",
    href: ["/user/profile"],
    icon: <User className="h-4 w-4" />,
  },
];

function UserLayout({ children }: { children: ReactNode }) {
  const { logout, user } = useAuth();
  const [unreadCount, setUnreadCount] = useState(0);

  // Default userId to undefined if not available
  const userId = user?.id as Id<"users"> | undefined;

  // Call useQuery unconditionally
  const notificationsQuery = useQuery(
    api.notification.getNotifications,
    userId ? { userId } : "skip"
  );

  // Initialize notifications to an empty array
  const notifications = notificationsQuery ?? [];

  useEffect(() => {
    setUnreadCount(notifications.length);
  }, [notifications]);

  const updatedLinks = links.map((link) =>
    link.name === "Notifications"
      ? {
        ...link,
        badge: (
          <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
            {unreadCount}
          </Badge>
        ),
      }
      : link
  );

  return (
    <div className="grid h-screen overflow-hidden w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Logo />
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <NavLinks links={updatedLinks} />
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Logo />
                  <span className="sr-only">LibraryWare</span>
                </Link>
                <NavLinks links={links} />
              </nav>
            </SheetContent>
          </Sheet>
          <SearchField />
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Avatar className="inline-block static">
                  <AvatarImage src={user.picture} />
                  <AvatarFallback>
                    {getFormattedInitials(user.name)}
                  </AvatarFallback>
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                <p className="text-sm font-medium">
                  {user.name || "Anonymous"}
                </p>
                <p className="text-xs font-light">{user.email || "mail"}</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default withAuthenticationRequired(UserLayout, {
  onRedirecting: () => <Loading />,
});
