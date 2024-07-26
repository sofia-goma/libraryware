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
      className={`hover:transition px-4 py-2 m-2 rounded-2xl font-bold text-lg border border-[#3c5968] box-border ${
        active
          ? "bg-[#3c5968] text-[#f2f8ff] hover:bg-[#f2f8ff] hover:text-[#3c5968]"
          : "bg-[#f2f8ff] text-[#3c5968] hover:bg-[#3c5968] hover:text-[#f2f8ff] "
      }`}
    >
      {text}
    </button>
  );
}
