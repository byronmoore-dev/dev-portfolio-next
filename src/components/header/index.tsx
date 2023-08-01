"use client";

import React, { forwardRef, RefObject, ForwardedRef } from "react";
import HamburgerMenu from "../menu";

interface HeaderProps {
  refs: {
    skillRef: RefObject<HTMLDivElement>;
    projectRef: RefObject<HTMLDivElement>;
  };
}

const Header = forwardRef((_, ref: any) => {
  const { skillsRef, projectsRef } = ref.current;
  const handleScroll = (result: string) => {
    switch (result) {
      case "projects":
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "skills":
        skillsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  return (
    <>
      <HamburgerMenu handleScroll={handleScroll} />

      <header className="absolute top-0 z-10 flex w-full flex-col items-center justify-center px-4 pt-4">
        <div className="flex w-full gap-8 ">
          <div className="flex cursor-default flex-col">
            <div className="mb-1 h-1 w-32 rounded-xl bg-beige-300 md:w-48" />
            <p className="font-base text-sm font-medium text-beige-300 brightness-[60%]">
              Byron Moore
            </p>
          </div>
          <div
            onClick={() => handleScroll("projects")}
            className="ml-auto hidden cursor-pointer flex-col md:flex"
          >
            <div className="mb-1 h-1 w-48 rounded-xl bg-beige-300" />
            <p className="font-base text-sm font-medium text-beige-300 brightness-[60%]">
              Projects
            </p>
          </div>

          <a
            href="https://photography.byronjaris.com"
            rel="noopener noreferrer"
            target="new_blank"
            className="hidden cursor-pointer flex-col md:flex"
          >
            <div className="mb-1 h-1 w-48 rounded-xl bg-beige-300" />
            <p className="font-base text-sm font-medium text-beige-300 brightness-[60%]">
              Photography
            </p>
          </a>
        </div>
      </header>
    </>
  );
});

Header.displayName = "Header";

export default Header;
