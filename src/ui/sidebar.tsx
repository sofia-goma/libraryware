import React from "react";
import NavLinks from "./navlinks";

type Props = {
  links: any[];
};

export default function Sidebar({ links }: Props) {
  return (
    <div className=" bg-[#F5F5F5] h-[90vh] w-[20%]">
      <NavLinks links={links} />
    </div>
  );
}
