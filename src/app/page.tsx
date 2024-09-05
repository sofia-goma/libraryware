"use client";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import BookCarousel from "@/components/layouts/home/book-carousel";
import Features from "@/components/layouts/home/features";
import Team from "@/components/layouts/home/team";
import Banner from "@/components/layouts/home/banner";
import { useState } from "react";
import NewsLetter from "@/components/layouts/home/news-letter";
import Hero from "@/components/layouts/home/hero";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Header />
      <main role='main'>
        {/* hero */}
        <Hero />
        {/* BANNER WELCOME */}
        <Banner />
        {/* BOOK CAROUSEL */}
        <BookCarousel />

        {/* FEATURES  */}
        <Features />

        {/* MEET OUR TEAM */}

        <Team />
        <NewsLetter />
      </main>
      <Footer />
    </>
  );
}
