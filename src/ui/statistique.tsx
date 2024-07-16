import React from "react";
import Tab from "./tab";
import CartChart from "./cardStat";

type Props = {};

const chart = [
  { title: "Total des livres", count: 2000 },
  { title: "Livres preté", count: 600 },
  { title: "Livres disponible", count: 1000 },
  { title: "Livres reservé", count: 400 },
  { title: "Retard en remise", count: 200 },
];

const total = chart[0].count;

export default function Statistique({}: Props) {
  return (
    <div>
      <div className="text-md mx-2 flex gap-6 items-center h-full  bg-white shadow-slate-800 drop-shadow-lg border-t border-l">
        <Tab />
      </div>
      <div className="flex justify-between">
        {chart.map((el, i) => (
          <CartChart
            title={el.title}
            count={el.count}
            percent={(el.count * 100) / total}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
