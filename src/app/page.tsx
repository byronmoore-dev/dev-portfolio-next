/* eslint-disable react/no-unescaped-entities */
"use client";
import HeroBlock from "@/components/blockHero";
import "@/styles/globals.css";
import Script from "next/script";
import React, { useRef } from "react";
import ProjectsBlock from "@/components/blockProjects";
import SkillsBlock from "@/components/blockSkills";

export default function Page() {
  const projectRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    console.log("click");
    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Script strategy="afterInteractive" async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_GA_ID}`}></Script>
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

      <main className="flex min-h-screen w-full flex-col items-center bg-beige-100/60 overflow-x-hidden">
        <HeroBlock handleClick={handleClick} />

        <SkillsBlock ref={skillsRef} />
        <ProjectsBlock ref={projectRef} />
      </main>
    </>
  );
}
