import NavBar from "@/ui/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-white w-screen h-screen bg-opacity-70">
      <NavBar />
      {children}
    </main>
  );
}
