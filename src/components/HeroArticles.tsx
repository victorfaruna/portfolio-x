"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import useWindowSize from "@/hooks/useWindowSize";
const DATA = [
  {
    title: "Personal portfolio website.",
    description:
      "Learn how to build a portfolio website with Next.js and Tailwind CSS.",
    image: "",
  },

  {
    title: "Personal portfolio website.",
    description:
      "Learn how to build a portfolio website with Next.js and Tailwind CSS.",
    image:
      "https://i.pinimg.com/736x/d9/b9/c6/d9b9c6935ce4a5025e4fd5ac37b5c3bc.jpg",
  },

  {
    title: "Personal portfolio website.",
    description:
      "Learn how to build a portfolio website with Next.js and Tailwind CSS.",
    image: "",
  },
];

export default function HeroArticles() {
  const { width } = useWindowSize();
  const swiperRef = useRef<SwiperRef>(null);
  return (
    <div
      id="swiper-container"
      className="w-full h-[200px] px-20 sm:px-8 relative"
    >
      <div id="pagination">
        <div
          id="pagination-left"
          className="absolute top-0 w-[200px] h-full bg-gradient-to-r z-[3] from-main via-main/70 to-transparent flex items-center"
        >
          <button className="size-[70px] sm:size-[40px] rounded-full border border-color-1/40 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 sm:size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
          </button>
        </div>

        <div
          id="pagination-right"
          className="absolute top-0 right-20 sm:right-8 w-[200px] h-full bg-gradient-to-l z-[3] from-main via-main/70 to-transparent flex items-center justify-end"
        >
          <button className="size-[70px] sm:size-[40px] rounded-full border border-color-1/40 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 sm:size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>

      <Swiper
        // install Swiper modules
        ref={swiperRef}
        className="w-full h-full"
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={width < 768 ? 1 : width > 1024 ? 3 : width > 768 ? 2 : 1}
        pagination={{ clickable: true }}
      >
        {DATA.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="inner w-full h-full flex justify-end rounded-2xl border border-color-1/20 bg-cover bg-center bg-no-repeat overflow-hidden"
              style={{
                backgroundImage: `url(${item ? item.image : ""})`,
                border: !item.image
                  ? "0.5px solid rgba(var(--color-1), 0.2)"
                  : "none",
              }}
            >
              <div className="mask w-[75%] h-full bg-main/80 flex flex-col justify-center gap-2 px-10 py-5">
                <p className="text-color-1 font-firaCode text-[0.8rem] font-medium">
                  {item.title}
                </p>
                <p className="text-color-1/80 text-[0.7rem] font-normal">
                  {item.description}
                </p>

                <div className="w-full buttons flex gap-3 items-center">
                  <button className="w-[100px] h-[35px] bg-color-1 text-main rounded-full text-[0.6rem] font-medium flex items-center justify-center">
                    Read More
                  </button>
                  <button className="size-[35px] bg-color-1 text-main rounded-full text-[0.8rem] font-medium flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
