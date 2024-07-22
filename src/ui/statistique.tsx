import React from "react";
import Tab from "./tab";
import CartChart from "./cardStat";

type Props = {
  books: boolean;
};

export default function Statistique({ books }: Props) {
  const chart = books
    ? [
        { title: "Total des livres", count: 2000 },
        { title: "Livres preté", count: 600 },
        { title: "Livres disponible", count: 1000 },
        { title: "Livres reservé", count: 400 },
        { title: "Retard en remise", count: 200 },
      ]
    : [
        { title: "Utilisateurs", count: 1000 },
        { title: "Retardateurs", count: 300 },
        { title: "Lecteurs", count: 500 },
        { title: "Reservé", count: 200 },
        { title: "No-Abonnés", count: 100 },
      ];
  const total = chart[0].count;
  const items = [
    { title: "Livres", href: "/admin/dashboard" },
    { title: "Membres", href: "/admin/dashboard/members" },
  ];
  return (
    <div>
      <div className="text-md mx-2 flex gap-6 items-center h-full  bg-white shadow-slate-800 drop-shadow-lg border-t border-l">
        <Tab items={items} />
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
