import Tab from "@/ui/tab";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const items = [
    { title: "Total d'utilisateur", href: "/admin/membres" },
    { title: "Utilisateur en retard", href: "/admin/membres/overdue" },
    { title: "Utilisateur en lecture", href: "/admin/membres/borrowed" },
    { title: "Utilisateur abonné", href: "/admin/membres/available" },
    { title: "Utilisateur non abonné", href: "/admin/membres/reserve" },
  ];
  return (
    <div className="mx-[5%] mt-[2vh] w-[80%] h-[88vh] overflow-y-scroll scrollbar-none  scrollbar-thumb-rounded-full scrollbar-thumb-gray-400 scrollbar-track-transparent">
      <div>
        <Tab items={items} />
      </div>
      {children}
    </div>
  );
}
