import Image from "next/image";
import React, { useContext } from "react";

type Props = {
  cover: string;
  id: string;
};

export default function UserBook({ cover, id }: Props) {
  return (
    <div className="p-2 bg-white rounded-lg shadow-md flex-none">
      <Image
        className="w-full h-full  rounded"
        src={cover}
        alt=""
        width={100}
        height={100}
      />
    </div>
  );
}
