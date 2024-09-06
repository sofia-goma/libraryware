"use client";
import React, { ReactNode } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

function ProfileLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ScrollArea className="w-full h-[80vh] overflow-y-auto">
      <div className="flex flex-col mx-3 md:flex-row gap-2">{children}</div>
    </ScrollArea>
  );
}

export default ProfileLayout;
