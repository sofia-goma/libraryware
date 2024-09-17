import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import Features from "@/components/layouts/home/features";
import Team from "@/components/layouts/home/team";
import Hero from "@/components/layouts/home/hero";

export default function Home() {
  return (
    <>
      <Header />
      <main role="main">
        <Hero />
        <Features />
        <Team />
      </main>
      <Footer />
    </>
  );
}
