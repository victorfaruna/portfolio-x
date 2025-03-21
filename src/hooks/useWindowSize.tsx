"use client";
import { useState, useEffect } from "react";

export default function useWindowSize() {
  const { innerWidth: width, innerHeight: height } =
    typeof window !== "undefined" ? window : { innerHeight: 0, innerWidth: 0 };
  const [windowSize, setWindowSize] = useState({ width, height });

  useEffect(() => {
    function handleResize() {
      const { innerWidth: width, innerHeight: height } = window;
      setWindowSize({ width, height });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
