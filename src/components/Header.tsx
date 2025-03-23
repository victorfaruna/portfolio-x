"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const getLocalTheme = () => {
  const localTheme =
    typeof window !== "undefined" ? localStorage.getItem("theme") : null;
  return localTheme ? localTheme : "dark";
};

export default function Header() {
  const [theme, setTheme] = useState(getLocalTheme());
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeChange = () => {
    const newTheme = getLocalTheme() === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };
  return (
    <header className="w-full h-[100px] sm:h-[70px] flex items-center justify-between px-20 sm:px-8 relative">
      <div
        id="header-circle"
        className=" circle absolute z-[-999] top-[-60px] right-[-60px]  size-[200px] sm:size-[160px] rounded-full border border-color-1/40"
      ></div>

      <div id="logo-big" className="sm:hidden">
        <p className="text-color-1 font-firaCode text-[1rem]">
          Victor
          <br />
          Faruna
        </p>
      </div>
      <div id="logo-small" className="hidden sm:block">
        <p className="text-color-1 font-firaCode text-[1rem]">
          {"<"}vic.faruna{"/>"}
        </p>
      </div>

      <nav
        id="nav"
        className={`${
          isOpen ? "sm:translate-x-[0]" : "sm:translate-x-[-100%]"
        } transition-all duration-200 sm:flex sm:w-screen sm:h-screen sm:absolute sm:top-0 sm:left-0 sm:z-[999] sm:backdrop-blur-[2px]`}
      >
        <ul className="sm:w-[80%] sm:h-full sm:bg-main flex sm:flex-col items-center sm:items-start gap-10 text-color-1/80 sm:pl-[3rem] sm:pt-[4rem] sm:border-r-[1px] sm:border-color-1/10">
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Projects</Link>
          </li>
          <li>
            <Link href="/">Work</Link>
          </li>
          <li>
            <Link href="/">Articles</Link>
          </li>
          <li>
            <Link href="/">Contacts</Link>
          </li>
        </ul>
        <div
          className="hidden sm:flex sm:flex-1 sm:h-full"
          onClick={() => setIsOpen(!isOpen)}
        ></div>
      </nav>

      <div id="right">
        <button
          onClick={handleThemeChange}
          className="size-[40px] rounded-full border border-color-1/40 flex items-center justify-center sm:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 animate-pulse"
          >
            {theme === "dark" ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            )}
          </svg>
        </button>

        <button className="hidden sm:block" onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-list size-5"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
