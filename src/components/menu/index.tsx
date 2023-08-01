import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, Transition, SVGMotionProps } from "framer-motion";

import { useRouter } from "next/navigation";
import { sleep } from "@/utils";

import { use100vh } from "react-div-100vh";
import GiftIcon from "@/assets/gift";

interface Props extends SVGMotionProps<object> {
  width?: number;
  height?: number;
  isOpen?: boolean;
  color?: string;
  strokeWidth?: string | number;
  transition?: Transition;
  lineProps?: any;
}
type NavLinkProps = {
  label: string;
  setIsOpen: (arg0: boolean) => void;
  handleScroll: (arg0: string) => void;
};

const MenuButton = ({
  isOpen = false,
  width = 24,
  height = 24,
  strokeWidth = 1,
  color = "#000",
  transition = undefined,
  lineProps = null,
  ...props
}: Props) => {
  const variant = isOpen ? "opened" : "closed";
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 2,
    },
  };
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -2,
    },
  };
  lineProps = {
    stroke: color,
    strokeWidth: strokeWidth as number,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition,
    ...lineProps,
  };
  const unitHeight = 4;
  const unitWidth = (unitHeight * (width as number)) / (height as number);

  return (
    <motion.svg
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      preserveAspectRatio="none"
      width={width}
      height={height}
      {...props}
    >
      <motion.line x1="0" x2={unitWidth} y1="0" y2="0" variants={top} {...lineProps} />
      <motion.line x1="0" x2={unitWidth} y1="2" y2="2" variants={center} {...lineProps} />
      <motion.line x1="0" x2={unitWidth} y1="4" y2="4" variants={bottom} {...lineProps} />
    </motion.svg>
  );
};

function NavLink({ label, setIsOpen, handleScroll }: NavLinkProps) {
  const doScroll = async (label: string) => {
    setIsOpen(false);
    await sleep(400);
    handleScroll(label.toLowerCase());
  };

  return (
    <motion.div
      className={`relative my-1 ml-6 flex cursor-pointer select-none items-center py-3 pl-4`}
      onClick={() => doScroll(label)}
      whileTap={{ scale: 1.05 }}
    >
      <h4 className={`ml-5 font-base text-base `}>{label}</h4>
    </motion.div>
  );
}

const MobileDrawer = ({
  setIsOpen,
  handleScroll,
}: {
  setIsOpen: (arg0: boolean) => void;
  handleScroll: (arg0: string) => void;
}) => {
  const mobileHeight = use100vh();

  return (
    <div className="fixed left-0 top-0 z-20">
      {/* background layer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        transition={{ duration: 0.3 }}
        className="h-screen w-screen bg-beige-700/60"
        onClick={() => setIsOpen(false)}
      />
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%", transition: { duration: 0.2 } }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className={`absolute right-0 top-0 flex w-4/5 flex-col justify-center bg-beige-100`}
        style={{ height: mobileHeight ? mobileHeight : 900 }}
      >
        <NavLink handleScroll={handleScroll} label="Skills" setIsOpen={setIsOpen} />
        <NavLink handleScroll={handleScroll} label="Projects" setIsOpen={setIsOpen} />
        <div className="mx-auto h-[2px] w-[75%] rounded-lg bg-beige-300" />{" "}
        <a
          href="https://photography.byronjaris.com"
          rel="noopener noreferrer"
          target="new_blank"
          className={`relative my-1 ml-6 flex cursor-pointer select-none items-center py-3 pl-4`}
        >
          <p className="ml-5 font-base text-base ">Photography</p>
        </a>
      </motion.div>
    </div>
  );
};

export default function HamburgerMenu({ handleScroll }: { handleScroll: (arg0: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = async () => {
      if (isOpen) {
        // when modal is visible...
        document.body.style.overflowY = "hidden";
      } else {
        // When the modal is hidden...
        await sleep(400);
        document.body.style.overflowY = "scroll";
      }
    };
    handleScroll();
  }, [isOpen]);

  return (
    <div className="overflow-hidden">
      <div
        className="absolute right-5 top-6 z-30 flex cursor-pointer md:hidden"
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        <MenuButton
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          strokeWidth="2.5"
          color="#92887f"
          lineProps={{ strokeLinecap: "round" }}
          transition={{ type: "spring", stiffness: 240, damping: 20 }}
          width={20}
          height={16}
        />
      </div>
      <AnimatePresence>
        {isOpen ? <MobileDrawer setIsOpen={setIsOpen} handleScroll={handleScroll} /> : null}
      </AnimatePresence>
    </div>
  );
}
