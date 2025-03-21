"use client";
import useWindowSize from "@/hooks/useWindowSize";
import HeroSmall from "./HeroSmall";
import HeroBig from "./HeroBig";

export default function Hero() {
  const { width } = useWindowSize();
  return width < 768 ? <HeroSmall /> : <HeroBig />;
}
