import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroArticles from "@/components/HeroArticles";
import Projects from "@/components/Projects";
import React from "react";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Header />
      <Hero />
      <HeroArticles />
      <About />
      <Projects />
    </main>
  );
}
