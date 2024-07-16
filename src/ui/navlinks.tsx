"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavLinks({ links }: { links: any[] }) {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow gap-3 items-center rounded-md px-3 py-4 text-sm w-full font-medium hover:bg-[#E0E0E0] hover:text-slate-900",
              {
                "bg-[#E0E0E0] text-slate-900": pathname === link.href,
              }
            )}
          >
            {link.icon}
            <p className="hidden md:block text-base shadow-[inset 0px -1px 0px #D1D4DB]">
              {link.name}
            </p>
          </Link>
        );
      })}
    </>
  );
}
