import React from "react";

type Props = {
  text: string;
  active: boolean;
};

export default function Button({ text, active }: Props) {
  return (
    <button
      className={
        active
          ? `bg-[#2D7DC4] text-white p-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-[#2D7DC4] border border-[#2D7DC4] box-border`
          : `bg-white text-[#2D7DC4] p-4 rounded-2xl font-bold text-lg hover:bg-[#2D7DC4] hover:text-white border border-[#2D7DC4] box-border`
      }
    >
      {text}
    </button>
  );
}
