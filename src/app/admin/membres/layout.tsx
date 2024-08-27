import Tab from "@/ui/tab";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const items = [
    { title: "Total", href: "/admin/membres" },
    { title: "Rétardataires", href: "/admin/membres/overdue" },
    { title: "Lecteurs", href: "/admin/membres/borrowed" },
    { title: "Abonnés", href: "/admin/membres/available" },
    { title: "Sans Abonnement", href: "/admin/membres/reserve" },
  ];
  return (
    <div className="mx-[5%] pt-[2vh] w-[80%] h-[88vh] overflow-y-scroll scrollbar-none  scrollbar-thumb-rounded-full scrollbar-thumb-gray-400 scrollbar-track-transparent">
      <div>
        <Tab items={items} />
      </div>
      {children}
    </div>
  );
}
