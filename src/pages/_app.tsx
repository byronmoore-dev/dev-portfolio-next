/* eslint-disable react/no-unescaped-entities */
import GiftIcon from "@/assets/gift";
import NexuzIcon from "@/assets/profile";
import HeroBlock from "@/components/hero";
import "@/styles/globals.css";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import React, { useRef, useEffect } from "react";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>Byron Jaris Photography</title>
        <meta property="og:image" content="https://s3.us-east-2.amazonaws.com/byronmoore.dev-photo-portfolio/natural-3.jpg" />
        <meta name="twitter:image" content="https://s3.us-east-2.amazonaws.com/byronmoore.dev-photo-portfolio/natural-3.jpg" />
      </Head>

      {/*<!-- Google tag (gtag.js) -->*/}
      <Script strategy="afterInteractive" async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_GA_ID}`}></Script>
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_GA_ID}', {
                page_path: window.location.pathname,
              });
            `,
        }}
      />

      <main className="flex min-h-screen w-full flex-col items-center bg-beige-100 overflow-x-hidden" ref={containerRef}>
        {/*Noise Filter */}
        <div className="fixed z-10 opacity-50 left-0 top-0 noise w-full h-screen pointer-events-none bg-white/10" />

        <HeroBlock />

        {/* My work block */}
        <h4 className="text-5xl font-bold p-6 pl-8 w-full text-center text-gray-800 mb-4 mt-40">Selected Work</h4>

        <div className="flex w-full xl:max-w-[1800px] justify-between mx-auto px-8 gap-8 mb-10">
          <div className="w-3/5 p-6 bg-beige-300/60 rounded-xl relative flex justify-center flex-col duration-200 overflow-hidden">
            <h4 className="text-3xl mb-2 font-bold">Solspot</h4>
            <p className="text-black/80 leading-5 font-thin text-base max-w-2xl w-1/2">
              Solspot served as an innovative social identity platform leveraging blockchain technology. It offered users a personalized and secure
              digital footprint, transforming the way they interacted online.
            </p>
            <div className="z-10 absolute aspect-square right-8 top-1/2 transform -translate-y-1/2 w-1/3 xl:w-auto xl:h-4/5 rounded-xl flex justify-center items-center overflow-hidden">
              <Image
                src="https://s3.us-east-2.amazonaws.com/byronmoore.dev-portfolio/solspot-hero.jpg"
                alt=""
                height="300"
                width="500"
                className="w-full h-full aspect-square"
              />
            </div>
            <div className="absolute bottom-6 left-6 flex gap-1 flex-wrap">
              <p className="text-sm font-medium text-gray-800 rounded-full mr-2">SKILLS</p>
              <p className="text-xs bg-purple-800 text-white rounded-full px-3 py-1">React</p>
              <p className="text-xs bg-purple-800 text-white rounded-full px-3 py-1">JS</p>
              <p className="text-xs bg-purple-800 text-white rounded-full px-3 py-1">MUI</p>
            </div>
          </div>
          <div className="rounded-3xl flex flex-col w-2/5 gap-8">
            <div className="bg-white/60 p-6 rounded-xl hover:bg-white/80 duration-200 hover:scale-[102%]">
              <GiftIcon className="bg-beige-100 h-12 rounded-full p-3 mb-2" />
              <h4 className="text-2xl mb-1 font-medium">Pivello</h4>
              <p className="text-black/80 leading-5 font-thin text-base">Prototype for a community rewards platform.</p>

              <div className="flex gap-1 flex-wrap mt-8">
                <p className="text-sm font-medium text-gray-800 rounded-full mr-2">SKILLS</p>
                <p className="text-xs bg-purple-800 text-white rounded-full px-3 py-1">Next JS</p>
                <p className="text-xs bg-purple-800 text-white rounded-full px-3 py-1">Tailwind CSS</p>
                <p className="text-xs bg-purple-800 text-white rounded-full px-3 py-1">TS</p>
              </div>
            </div>
            <div className="bg-white/60 p-6 rounded-xl hover:bg-white/80 duration-200 hover:scale-[102%] relative">
              <NexuzIcon className="bg-beige-100 h-12 rounded-full p-3 mb-2" />
              <h4 className="text-2xl mb-1 font-medium">Nexuz</h4>
              <p className="text-black/70 leading-5 font-thin text-base">Open-source and fully decentralizeed Link-tree clone.</p>

              <div className="flex gap-1 flex-wrap mt-8">
                <p className="text-sm font-medium text-gray-800 rounded-full mr-2">SKILLS</p>
                <p className="text-xs bg-purple-800 text-white rounded-full px-3 py-1">React</p>
                <p className="text-xs bg-purple-800 text-white rounded-full px-3 py-1">JS</p>
              </div>
            </div>
          </div>
        </div>
        <h4 className="text-lg cursor-pointer font-bold p-4 text-center text-white bg-gray-800 w-36 mb-36 rounded-2xl">See More</h4>

        {/* My Skills block */}
        <div className="flex w-full xl:max-w-[1800px] justify-between mx-auto px-8 mb-40 mt-10 gap-8">
          <div className="w-3/5 p-8">
            <h4 className="text-5xl mb-4 font-bold text-gray-800">My Expertise</h4>
            <p className="text-gray-800/80 leading-8 font-thin text-xl max-w-2xl">
              With a passion for technology and a knack for simplifying complex issues, I've spent years perfecting my skills in coding and digital
              design. I thrive on efficient workflows, clear communication, and the discipline that comes with a strong work ethic. It's this mix that
              helps me create meaningful digital solutions.
            </p>
          </div>
          <div className="bg-white/60 rounded-3xl p-8 flex flex-col w-2/5">
            <h4 className="font-bold text-gray-800 text-3xl mb-2">Skills</h4>
            <p className="leading-6 text-gray-800/80 font-thin text-lg mb-4">
              React / Next.js / JavaScript / Tailwind CSS / Node.js / TypeScript / Figma / Express / C# / Unity / Python3
            </p>
            <button className="bg-black text-white w-40 py-3 rounded-lg mt-auto text-sm font-bold">Download Resume</button>
          </div>
        </div>
      </main>
    </>
  );
}
