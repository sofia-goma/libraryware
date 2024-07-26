import Tab from "@/ui/tab";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const items = [
    { title: "Total Livres", href: "/admin/books" },
    { title: "Livres retarder", href: "/admin/books/overdue" },
    { title: "Livres utiliser", href: "/admin/books/borrowed" },
    { title: "Livres disponible", href: "/admin/books/available" },
    { title: "Livres reserver", href: "/admin/books/reserve" },
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
