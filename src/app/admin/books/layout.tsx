import Tab from "@/components/shared/tab";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const items = [
    { title: "Total", href: "/admin/books" },
    { title: "Ajournement", href: "/admin/books/overdue" },
    { title: "En Lecture", href: "/admin/books/borrowed" },
    { title: "Disponible", href: "/admin/books/available" },
    { title: "Réservés", href: "/admin/books/reserve" },
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
