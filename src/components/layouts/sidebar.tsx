import React from "react";
import NavLinks from "../shared/navlinks";

type Props = {
  links: any[];
};

export default function Sidebar({ links }: Props) {
  return (
    <div className=" bg-[#f2f8ff] h-[90vh] w-[20vw] shadow-sm">
      <NavLinks links={links} />
    </div>
  );
}
