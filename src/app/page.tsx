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
import Footer from "@/components/footer";
import Head from "next/head";

export default function Page() {
  const introRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef({ skillsRef, projectsRef });

  const handleClick = () => {
    introRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Head>
        <title>Portfolio | Byron M</title>
        <meta
          name="description"
          content="Meet Byron, a prolific creator and developer specializing in Next.js, UI design, and web applications. Discover his unique blend of technical expertise and creativity, powering innovative digital solutions in the tech landscape."
        />

        <meta property="og:title" content="Portfolio | Byron Moore" />
        <meta
          property="og:image"
          content="https://s3.us-east-2.amazonaws.com/byronmoore.dev-photo-portfolio/misc/meta-image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Creator Portfolio" />
        <meta
          name="twitter:image"
          content="https://s3.us-east-2.amazonaws.com/byronmoore.dev-photo-portfolio/misc/meta-image.jpg"
        />

        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
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
        <Footer />
      </main>
    </>
  );
}
