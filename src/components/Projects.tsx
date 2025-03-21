"use client";
import Image from "next/image";
import React from "react";

type ProjectCardData = {
  name: string;
  tech: string[];
  links: {
    github: string;
    website: string;
  };
  image: string;
  desc: string;
};

const DATA = [
  {
    name: "Thefloxtv",
    tech: [
      "Typescript",
      "Next JS",
      "Supabase",
      "Tailwind CSS",
      "Postgres",
      "REST API",
    ],
    links: {
      github: "https://github.com/victorfaruna/thefloxtv-svelte",
      website: "https://thefloxtv-svelte.vercel.app/",
    },
    image: "/images/projects/thefloxtv.webp",
    desc: `A robust movie streaming platform that offers a wide range of TV shows and movies.`,
  },
  {
    name: "JOJI DAO",
    tech: [
      "OAuth",
      "Typescript",
      "SvelteKit",
      "Supabase",
      "Tailwind CSS",
      "Postgres",
    ],
    links: {
      github: "",
      website: "https://jojidao.com",
    },
    image: "/images/projects/jojidao.webp",
    desc: `A community that is built for helping Crypto projects grow in Nigeria by hosting IRL events and online community development.
.`,
  },

  {
    name: "Portfolio",
    tech: ["React", "Next JS", "Tailwind CSS"],
    links: {
      github: "",
      website: "",
    },
    image: "/images/projects/portfolio.webp",
    desc: `A personal portfolio website that showcases my skills and experience.
.`,
  },
];

const ProjectCard = ({
  data,
  index,
}: {
  data: ProjectCardData;
  index: number;
}) => {
  return (
    <div
      className={`item w-full flex md:flex-col mb-[10rem] gap-10 ${
        (index + 1) % 2 == 0 && "flex-row-reverse"
      }`}
    >
      <div className="left w-[50%] md:w-full flex flex-col gap-5 ">
        <p className="text-[2rem]">{data.name}</p>

        <div className="tech w-full flex items-center flex-wrap gap-3">
          {data.tech.map((techItem: string, index: number) => (
            <div
              key={index}
              className="item px-6 py-2 rounded-full border border-color-1/20 flex items-center justify-center text-color-1/70"
            >
              {techItem}
            </div>
          ))}
        </div>

        <div className="desc">
          <p className="text-color-1/50 text-[0.9rem]">
            <span className="text-color-1/90">{data.name}</span> - {data.desc}
          </p>
        </div>

        <div className="buttons w-full flex items-center gap-5">
          <button
            className={`gh-button size-[40px] bg-main rounded-full border border-color-1/60 flex items-center justify-center ${
              !data.links.github && "hidden"
            }`}
            onClick={() => window.open(data.links.github, "_blank")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </button>
          <button
            className="arrow-button w-[130px] h-[40px]  bg-color-1 text-main rounded-full border border-color-1/60 flex items-center justify-center gap-1"
            onClick={() => window.open(data.links.website, "_blank")}
          >
            <span className="text-[0.8rem] text-main font-firaCode">
              Visit Site
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-arrow-up-right size-3"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="right w-[50%] md:w-full">
        <Image
          className="w-full object-cover rounded-[1.5rem]"
          src={data.image}
          width={1280}
          height={720}
          alt=""
        />
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <div className="projects-container w-full mt-[10rem] px-20 sm:px-8 relative">
      <div
        id="projects-circle"
        className="circle absolute z-[-999] top-[-100px] right-[-200px] size-[800px] rounded-full border border-color-1/40"
      ></div>
      <div className="headline w-full flex justify-end mb-10">
        <p className="w-[50%] text-[1.2rem] font-firaCode text-color-1/60">
          .../Projects...
        </p>
      </div>

      {DATA.map((item, index) => (
        <ProjectCard key={index} data={item} index={index} />
      ))}
    </div>
  );
}
