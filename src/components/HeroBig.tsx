"use client";
import React, { useEffect } from "react";
import fitty from "fitty";

const SocialItem = ({
  icon,
  link,
  text,
}: {
  icon: string;
  link: string;
  text: string;
}) => {
  return (
    <button
      onClick={() => window.open(link, "_blank")}
      className="item px-6 py-2 rounded-full border border-color-1/20 flex gap-2 items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="bi bi-twitter-x size-3"
        viewBox="0 0 16 16"
      >
        <path d={icon} />
      </svg>
      <p className="text-color-1/60">{text}</p>
    </button>
  );
};

export default function HeroBig() {
  useEffect(() => {
    fitty(".fit-text");
  }, []);
  return (
    <div className="w-full px-20 my-[3.5rem] flex flex-col gap-1">
      <div
        id="top"
        className="flex sm:flex-col/ gap-20 justify-center items-end"
      >
        <div className="w-[60%]">
          <p className="fit-text whitespace-nowrap font-firaCode font-semibold leading-none">
            Full-stack
          </p>
        </div>
        <div
          id="projects-button-cont"
          className="flex flex-[1] gap-3 mb-3 justify-end"
        >
          <button className="w-[250px] h-[50px] bg-color-1 text-[1rem] text-main italic rounded-full font-medium flex items-center justify-center">
            Projects
          </button>
          <button className="size-[50px] bg-color-1 flex items-center justify-center rounded-full text-main">
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

      <div id="bottom" className="flex gap-20 justify-center items-start">
        <p className="w-[50%] text-[0.8rem] font-firaCode text-color-1/60 mt-3">
          I’m Victor Faruna, a skilled{" "}
          <span className="text-color-1 italic">full-stack developer</span> with
          expertise in creating scalable web and mobile applications using
          modern technologies like React, Next.js, Node.js, Python, and React
          Native. I’m passionate about solving complex problems and delivering
          user-focused solutions.
        </p>
        <div className="w-[50%]">
          <p className="fit-text whitespace-nowrap font-firaCode font-semibold leading-none">
            Developer
          </p>
        </div>
      </div>

      <div id="socials" className="flex justify-center items-center gap-7">
        <SocialItem
          icon="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425
        5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86
        13.028h1.36L4.323 2.145H2.865z"
          link="https://x.com/dev_victor_f"
          text="X / Twitter"
        />
        <SocialItem
          icon="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
          link="https://github.com/victorfaruna"
          text="Github"
        />
        <SocialItem
          icon="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
          link="https://wa.me/+2349125165937"
          text="Whatsapp"
        />
      </div>
    </div>
  );
}
