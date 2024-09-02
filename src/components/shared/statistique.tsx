import React from "react";
import Tab from "./tab";
import CartChart from "./card-stat";

type Props = {
  books: boolean;
};

export default function Statistique({ books }: Props) {
  const chart = books
    ? [
        { title: "Total", count: 2000 },
        { title: "En Lecture", count: 600 },
        { title: "Disponibles", count: 1000 },
        { title: "Réservés", count: 400 },
        { title: "Ajournés", count: 200 },
      ]
    : [
        { title: "Utilisateurs", count: 1000 },
        { title: "Retardataires", count: 300 },
        { title: "Lecteurs", count: 500 },
        { title: "Réservataire", count: 200 },
        { title: "Sans Abonnement", count: 100 },
      ];
  const total = chart[0].count;
  const items = [
    { title: "Livres", href: "/admin/dashboard" },
    { title: "Membres", href: "/admin/dashboard/members" },
  ];
  return (
    <div>
      <Tab items={items} />
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
