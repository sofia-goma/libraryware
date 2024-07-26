import React from "react";

type Props = {
  active: boolean;
};

export default function Logo({ active }: Props) {
  return (
    <>
      <h1 className="text-center w-full text-8xl leading-35">
        <span className="text-[#3c5968] font-thin">Library</span>
        <span className="text-[#574c4a] font-black">Ware</span>
      </h1>
      {active && (
        <p className="text-xl mt-4 text-[#574c4a] text-center font-serif">
          Modernisation de la gestion des bibliothèques pour une meilleure
          accessibilité et efficacité.
        </p>
      )}
    </>
  );
}
