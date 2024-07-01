import React from "react";

type Props = {};

export default function Logo({}: Props) {
  return (
    <>
      <h1 className="text-center w-full text-8xl font-black leading-35">
        <span className="text-[#F4555A]">Library</span>
        <span className="text-[#2D7DC4]">Ware</span>
      </h1>
      <p className="font-mono font-bold text-xs mt-4 bg-clip-text text-transparent bg-gradient-to-r from-[#F4555A] to-[#2D7DC4]">
        Modernisation de la gestion des bibliothèques pour une meilleure
        accessibilité et efficacité.
      </p>
    </>
  );
}
