import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="about-container w-full mt-[10rem] px-20 relative">
      <div
        id="about-circle"
        className="circle absolute z-[-999] top-[-100px] right-[-200px] size-[600px] rounded-full border border-color-1/40 sm:size-[300px]"
      ></div>

      <div className="headline w-full flex flex-wrap">
        <p className="w-[50%] text-[1.2rem] font-firaCode text-color-1/60">
          .../About me...
        </p>
        <p className="text-[1rem] text-color-1/70">
          Hello! I'm Victor, I'm a full stack developer
          <br />
          With more than <span className="italic text-color-1">6 years</span> of
          experience.
        </p>
      </div>

      <div className="inner w-full flex justify-between mt-20">
        <div className="left w-[40%] flex flex-col gap-5">
          <div className="rowx w-full p-7 rounded-[2.2rem] bg-color-1 borderrr border-color-1/30 flex flex-col gap-2">
            <p className="title text-[1.2rem] font-ligh text-main">Front-end</p>
            <p className="text-main/80 font-firaCode">
              Javascript / Typescript / React / Next.js / Jest / React Native /
              Svelte / SvelteKit
            </p>
          </div>

          {/**/}
          <div className="stew w-full flex justify-between">
            <div className="rowx w-full p-7 rounded-[2.2rem] border border-color-1/30 flex flex-col gap-2">
              <p className="title text-[1.2rem] font-light">Styles</p>
              <p className="text-color-1/70 font-firaCode">
                Tailwind CSS / SCSS / SASS / PostCSS / Material UI
              </p>
            </div>
            <div className="rowp w-full flex items-center justify-center">
              <button className="gh-button size-[55px] bg-main rounded-full border border-color-1/60 flex items-center justify-center">
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
              <button className="arrow-button size-[55px] translate-x-[-25.5px] bg-color-1 text-main rounded-full border border-color-1/60 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-up-right"
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
          {/**/}
          <div className="rowx w-full p-7 rounded-[2.2rem] border border-color-1/30 flex flex-col gap-2">
            <p className="title text-[1.2rem] font-light">Back-end</p>
            <p className="text-color-1/70 font-firaCode">
              Javascript / Typescript / React / Next.js / Jest / React Native /
              Svelte / SvelteKit
            </p>
          </div>
          {/**/}
          <div className="rice w-full flex justify-between">
            <div className="rowd w-full flex items-center justify-center text-color-1/70">
              <p>
                These are all some of my favorite{" "}
                <span className="italic text-color-1">tools</span>,{" "}
                <span className="italic text-color-1">technologies</span> and{" "}
                <span className="italic text-color-1">frameworks</span> i have
                worked with.
              </p>
            </div>
            <div className="rowx w-full p-7 rounded-[2.2rem] border border-color-1/30 flex flex-col gap-2">
              <p className="title text-[1.2rem] font-light">DevOps</p>
              <p className="text-color-1/70 font-firaCode">
                Nginx / Docker / Kubernetes / AWS / GCP / Azure / Bash
              </p>
            </div>
          </div>
        </div>
        <div className="right w-[50%] pl-10 flex justify-center">
          <div className="image-container w-[320px] h-[400px] overflow-hidden rounded-[2rem] rounded-bl-nonee rounded-tr-nonee border border-color-1/30">
            <Image
              className="w-full h-full object-cover"
              src="/images/portrait-2.webp"
              width={500}
              height={600}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
