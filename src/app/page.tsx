/* eslint-disable react/no-unescaped-entities */
"use client";
import HeroBlock from "@/components/blockHero";
import "@/styles/globals.css";
import Script from "next/script";
import React, { useRef } from "react";
import ProjectsBlock from "@/components/blockProjects";
import SkillsBlock from "@/components/blockSkills";
import IntroBlock from "@/components/blockIntro";
import Header from "@/components/header";

export default function Page() {
  const introRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef({ skillsRef, projectsRef });

  const handleClick = () => {
    introRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Script
        strategy="afterInteractive"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_GA_ID}`}
      ></Script>
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_path: window.location.pathname,
              });
            `,
        }}
      />
      <main className="flex min-h-screen w-full flex-col items-center overflow-x-hidden bg-beige-100">
        {/*Noise Filter */}
        <div className="noise pointer-events-none fixed left-0 top-0 z-10 h-screen w-full bg-white/10 opacity-50" />

        <Header ref={headerRef} />
        <HeroBlock handleClick={handleClick} />
        <IntroBlock ref={introRef} />
        <SkillsBlock ref={skillsRef} />
        <ProjectsBlock ref={projectsRef} />
      </main>
    </>
  );
}
