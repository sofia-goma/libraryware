import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

type Props = {
  text: string;
  choice: string[];
  setChoice: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function Badge({ text, choice, setChoice }: Props) {
  const [valid, setValid] = useState(true);
  const handleClick = () => {
    setValid(!valid);
    if (valid) {
      setChoice([...choice, text]);
    } else {
      setChoice(choice.filter((item) => item !== text));
    }
  };
  return (
    <div
      onClick={handleClick}
      className={`flex gap-2 cursor-pointer ${
        valid ? "text-slate-950 bg-white" : "text-white bg-slate-700"
      }  items-center py-2 px-3 rounded-2xl`}
    >
      <h3 className="text-xl">{text}</h3>
      {valid ? <FaPlus /> : <FaMinus />}
    </div>
  );
}
