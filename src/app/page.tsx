"use client";
import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroArticles from "@/components/HeroArticles";
import Projects from "@/components/Projects";
import { Splash } from "@/components/Splash";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

export default function Home() {
    const [isBooting, setIsBooting] = useState(true);
    setTimeout(() => {
        setIsBooting(false);
    }, 3000);
    return (
        <main className="w-screen h-full overflow-x-hidden">
            <Splash />

            {/* <Header />
            <Hero />
            <HeroArticles />
            <About />
            <Projects /> */}
        </main>
    );
}
