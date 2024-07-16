import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

const items = [
  { title: "Livres", href: "/admin/dashboard" },
  { title: "Membres", href: "/admin/dashboard/members" },
];

export default function Tab({}: Props) {
  const pathname = usePathname();
  return (
    <>
      {items.map((t, i) => (
        <Link
          href={t.href}
          key={i}
          className={`${
            pathname === t.href
              ? "text-[#F4555A] p-3 border-b-2 border-[#F4555A]"
              : ""
          } text-base font-bold `}
        >
          {t.title}
        </Link>
      ))}
    </>
  );
}
