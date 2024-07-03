import React from "react";

type Props = {
  text: string;
  active: boolean;
  submit?: boolean;
};

export default function Button({ text, active, submit }: Props) {
  return (
    <button
      type={submit ? "submit" : "button"}
      className={`px-4 py-2 m-2 rounded-2xl font-bold text-lg border border-[#2D7DC4] box-border ${
        active
          ? "bg-[#2D7DC4] text-white hover:bg-white hover:text-[#2D7DC4]"
          : "bg-white text-[#2D7DC4] hover:bg-[#2D7DC4] hover:text-white "
      }`}
    >
      {text}
    </button>
  );
}
