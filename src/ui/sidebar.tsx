import React from "react";
import NavLinks from "./navlinks";

type Props = {
  links: any[];
};

export default function Sidebar({ links }: Props) {
  return (
    <div className=" bg-[#f2f8ff] h-[90vh] w-[20%] shadow-sm">
      <NavLinks links={links} />
    </div>
  );
}
