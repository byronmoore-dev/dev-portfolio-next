import "./carousel.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

/* eslint-disable react/no-unescaped-entities */
import React, { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import data from "@/assets/data.js";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { useBreakpoint } from "use-breakpoint";

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1024 };

const ProjectCard = ({
  project,
  i,
  view,
  currentSlide,
}: {
  project: any;
  i: number;
  view: boolean;
  currentSlide: number;
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const { breakpoint: bp } = useBreakpoint(BREAKPOINTS, "desktop");

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isPlaying = i === currentSlide;

  const videoSrc = useMemo(() => {
    if (currentSlide === i + 1 || currentSlide === i - 1 || currentSlide === i) {
      return project.video;
    }
    return null;
  }, [currentSlide, i, project.video]);

  const handleSetHover = () => {
    if (!project.url && !project.github) return;
    setIsHover(true);
  };

  useEffect(() => {
    if (!videoRef.current) return;

    if (isPlaying) {
      if (videoRef.current.readyState >= 2) {
        // Check if already loaded
        videoRef.current.play();
      }
    } else {
      videoRef.current.pause();
    }
  }, [currentSlide, isPlaying]);

  if (bp === "mobile") {
    return (
      <div
        onMouseEnter={() => handleSetHover()}
        onMouseLeave={() => setIsHover(false)}
        className={`keen-slider__slide number-slide flex-direction relative z-50 flex h-auto flex-col items-start justify-start px-2`}
      >
        <div className="relative z-10 flex h-full w-full flex-row items-start ">
          <div className="flex w-full flex-col bg-gradient-to-t p-4">
            <h4 className="text-left font-head text-2xl font-bold text-black">{project.name}</h4>
            <p className="text-medium max-w-md text-left font-base text-black">{project.desc}</p>
          </div>
        </div>

        <motion.div
          animate={{ y: isHover ? -10 : 0, opacity: isHover ? 0 : 1 }}
          className="absolute bottom-3 right-5"
        >
          {project.status !== "deprecated." || bp !== "mobile" ? (
            <p className="rounded bg-beige-700 px-2 py-1 font-base text-xs font-bold text-beige-300">
              {project.status}
            </p>
          ) : null}
        </motion.div>
        <motion.div
          animate={{ y: !isHover ? 10 : 0, opacity: !isHover ? 0 : 1 }}
          className="absolute bottom-5 right-5 flex gap-3"
        >
          {project.url && (
            <a
              href={project.url}
              target="new_blank"
              className="z-10 rounded bg-beige-300 px-3 py-1 font-base text-xs font-bold text-beige-700 duration-200 hover:bg-beige-700 hover:text-white"
            >
              site
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="new_blank"
              className="z-10 rounded bg-beige-300 px-3 py-1 font-base text-xs font-bold text-beige-700 duration-200 hover:bg-beige-700 hover:text-white"
            >
              github
            </a>
          )}
        </motion.div>

        {videoSrc && (
          <video
            ref={videoRef}
            src={videoSrc}
            className="relative z-0 aspect-[16/9] h-full w-full select-none rounded-[16px] bg-beige-200"
            muted
            loop
            playsInline
            disablePictureInPicture
            onClick={(e) => e.preventDefault()} // Prevents default fullscreen behavior on some browsers
            onTouchStart={(e) => e.preventDefault()}
          />
        )}
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => handleSetHover()}
      onMouseLeave={() => setIsHover(false)}
      className={`keen-slider__slide number-slide relative z-50 aspect-[16/9] bg-beige-200`}
    >
      <div className="relative z-10 flex h-full w-full flex-row items-end ">
        <div
          className={`flex w-full flex-col bg-gradient-to-t p-4 ${
            project.videoTheme === "light"
              ? " from-white/90 to-transparent"
              : " from-black/90 to-transparent"
          }`}
        >
          <h4
            className={`text-left font-head text-sm font-bold md:text-2xl ${
              project.videoTheme === "light" ? "text-black" : "text-white"
            }`}
          >
            {project.name}
          </h4>
          <p
            className={`max-w-md text-left font-base text-[10px] md:mt-1 md:text-sm md:leading-4 ${
              project.videoTheme === "light" ? "text-black" : "text-white"
            }`}
          >
            {project.desc}
          </p>
        </div>
        <motion.div
          animate={{ y: isHover ? -10 : 0, opacity: isHover ? 0 : 1 }}
          className="absolute bottom-3 right-5"
        >
          {project.status !== "deprecated." ? (
            <p className="rounded bg-beige-700 px-2 py-1 font-base text-xs font-bold text-beige-300">
              {project.status}
            </p>
          ) : null}
        </motion.div>
        <motion.div
          animate={{ y: !isHover ? 10 : 0, opacity: !isHover ? 0 : 1 }}
          className="absolute bottom-5 right-5 flex gap-3"
        >
          {project.url && (
            <a
              href={project.url}
              target="new_blank"
              className="z-10 rounded bg-beige-300 px-3 py-1 font-base text-xs font-bold text-beige-700 duration-200 hover:bg-beige-700 hover:text-white"
            >
              site
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="new_blank"
              className="z-10 rounded bg-beige-300 px-3 py-1 font-base text-xs font-bold text-beige-700 duration-200 hover:bg-beige-700 hover:text-white"
            >
              github
            </a>
          )}
        </motion.div>
      </div>

      {videoSrc && (
        <video
          ref={videoRef}
          src={videoSrc}
          className="absolute -top-[2px] left-0 z-0 h-full w-full scale-[102%] select-none bg-beige-200"
          muted
          loop
          playsInline
          disablePictureInPicture
          onClick={(e) => e.preventDefault()} // Prevents default fullscreen behavior on some browsers
          onTouchStart={(e) => e.preventDefault()}
        />
      )}
    </div>
  );
};

function Arrow(props: {
  left?: boolean;
  disabled: boolean;
  onClick: (e: any) => void;
  className: string;
}) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? "arrow--left" : "arrow--right"} ${disabled} ${
        props.className
      }`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
    </svg>
  );
}

const ProjectsDetailedBlock = forwardRef<HTMLDivElement>((_, ref) => {
  const [entered, setEntered] = useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  return (
    <div
      className="project mx-auto flex w-full select-none flex-col justify-between gap-8 pb-32 pt-4 xl:pb-64 xl:pt-32"
      ref={ref}
    >
      <InView
        as="div"
        onChange={(inView, entry) => {
          inView ? setEntered(true) : null;
        }}
        root={null}
        rootMargin="0px"
        threshold={0.2}
      >
        <div className="flex w-full flex-col items-center justify-center xl:flex-row">
          {/* Info Content */}
          <div className="relative flex w-full flex-col items-center pb-8 xl:w-[400px] xl:items-start xl:pr-8">
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.25 }}
              viewport={{ once: true }}
              className="z-10 mt-16  text-left font-head text-3xl font-bold text-beige-800 md:text-3xl"
            >
              Past Work
            </motion.h1>
            <motion.h6
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.25 }}
              viewport={{ once: true }}
              className="z-10  mb-6 mt-2 w-5/6 max-w-xl text-center font-head text-xl font-medium text-beige-800 xl:text-left"
            >
              I build clean, high-performance apps. Here are some of my projects solving real
              challenges.
            </motion.h6>
            <div className="relative h-auto">
              {loaded && instanceRef.current && (
                <div className="mt-4 flex flex-row gap-4">
                  <Arrow
                    left
                    onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
                    className="rounded-xl bg-beige-300 p-2 duration-300 hover:bg-beige-400 active:bg-beige-500"
                    disabled={currentSlide === 0}
                  />

                  <Arrow
                    onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
                    className="rounded-xl bg-beige-300 p-2 duration-300 hover:bg-beige-400 active:bg-beige-500"
                    disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Carousel Content */}
          <div className="flex w-full flex-col gap-8 sm:px-4 lg:w-[850px]">
            <div className="flex w-full flex-col">
              <div ref={sliderRef} className="keen-slider">
                {data.projects.map((project, index) => (
                  <ProjectCard
                    key={project.name}
                    project={project}
                    i={index}
                    view={entered}
                    currentSlide={currentSlide}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </InView>
    </div>
  );
});

ProjectsDetailedBlock.displayName = "ProjectsDetailedBlock";

export default ProjectsDetailedBlock;
