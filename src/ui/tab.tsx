"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  items: { title: string; href: string }[];
};

export default function Tab({ items }: Props) {
  const pathname = usePathname();
  return (
    <>
      {items.map((t, i) => (
        <Link
          href={t.href}
          key={i}
          className={`${
            pathname === t.href
              ? "text-[#F4555A] border-b-2 border-[#F4555A]"
              : ""
          } text-base font-bold p-3 `}
        >
          {t.title}
        </Link>
      ))}
    </>
  );
}
