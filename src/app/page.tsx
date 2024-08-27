import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Banner from "@/components/layouts/home/Banner";
import BookCarousel from "@/components/layouts/home/BookCarousel";
import Features from "@/components/layouts/home/Features";
import Team from "@/components/layouts/home/Team";

export default function Home() {
  return (
    <>
      {/* header  */}
      <Header />
      <main>
        {/* BANNER WELCOME */}
        <Banner />

        {/* BOOK CAROUSEL */}
        <BookCarousel />

        {/* FEATURES  */}
        <Features />


        {/* MEET OUR TEAM */}

        <Team />
      </main>
      <Footer />
    </>
  );
}
