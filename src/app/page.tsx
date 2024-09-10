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
        {/* <div className="flex items-center justify-center">
          <Banner />
        </div> */}
        <Features />
        <Team />
      </main>
      <Footer />
    </>
  );
}
