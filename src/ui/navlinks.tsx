"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks({ links }: { links: any[] }) {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href[0]}
            className={`flex h-[48px] grow gap-3 items-center rounded-md px-3 py-4 text-sm w-full font-medium ${
              link.href.includes(pathname)
                ? "bg-[#3c5968] text-slate-900"
                : "hover:bg-[#3c596866]"
            }`}
          >
            {link.href.includes(pathname) ? link.icons : link.icon}
            <p
              className={`hidden md:block text-base shadow-[inset 0px -1px 0px #D1D4DB] ${
                link.href.includes(pathname) ? "text-white" : ""
              }`}
            >
              {link.name}
            </p>
          </Link>
        );
      })}
    </>
  );
}
