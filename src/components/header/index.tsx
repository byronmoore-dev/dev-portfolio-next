"use client";
import React, { forwardRef } from "react";
import HamburgerMenu from "../menu";

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

      <header
        className="absolute top-0 z-10 flex w-full flex-col items-center justify-center px-4 pt-4"
        id="header"
      >
        <div className="flex w-full gap-8 ">
          <div className="flex cursor-default flex-col">
            <div className="mb-1 h-[3px] w-32 rounded-xl bg-beige-300 brightness-75 md:w-48" />
            <p className="font-base text-sm font-medium text-beige-300 brightness-[60%]">
              Byron Moore
            </p>
          </div>
          <div
            onClick={() => handleScroll("projects")}
            className="ml-auto hidden cursor-pointer flex-col md:flex"
          >
            <div className="mb-1 h-[3px] w-48 rounded-xl bg-beige-300 brightness-75" />
            <p className="font-base text-sm font-medium text-beige-300 brightness-[60%]">
              Projects
            </p>
          </div>

          <a
            href="https://photography.byronmoore.dev"
            rel="noopener noreferrer"
            target="new_blank"
            className="hidden cursor-pointer flex-col md:flex"
          >
            <div className="mb-1 h-[3px] w-48 rounded-xl bg-beige-300 brightness-75" />
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
