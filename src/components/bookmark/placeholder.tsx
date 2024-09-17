import { ReactNode } from "react";
import Image from "next/image";

export function Placeholder({ children }: { children?: ReactNode }) {
  return (
    <div className="flex flex-col gap-8 w-full items-center">
      <Image
        alt="an image of a picture and directory icon"
        width="300"
        height="300"
        src="/empty.svg"
      />
      {children}
    </div>
  );
}
