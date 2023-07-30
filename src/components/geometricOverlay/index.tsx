"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const size = 60;

type DataArray = Array<Array<Boolean>>;

const calcIsVertical = (i: number, j: number) => {
  let rowOdd = i % 2 === 1 ? true : false;
  let colOdd = j % 2 === 1 ? true : false;
  if (rowOdd && colOdd) return false;
  if (rowOdd && !colOdd) return true;
  if (!rowOdd && colOdd) return true;
  return false;
};

const createArr = (w: number, h: number): any => {
  let array = [];
  let rows = h / size;
  let cols = w / size;
  for (let i = 0; i < rows; i++) {
    let innerRow = [];
    for (let j = 0; j < cols; j++) {
      let isVertical = calcIsVertical(i, j);
      innerRow.push(isVertical);
    }
    array.push(innerRow);
  }
  return array;
};

const AnimatedBox = ({ col }: { col: Boolean }) => {
  const controls = useAnimation();

  const handleAnimate = async () => {
    let first = true;
    async function animation() {
      await controls.start({ rotate: 0, transition: { duration: 1, delay: first ? 3 : 0 } });
      await controls.start({ rotate: 90, transition: { duration: 1, delay: 1.5 } });
      await controls.start({ rotate: 180, transition: { duration: 1, delay: 1.5 } });
      await controls.start({ rotate: 270, transition: { duration: 1, delay: 1.5 } });
      await controls.start({ rotate: 360, transition: { duration: 1, delay: 1.5 } });
      return await controls.start({ rotate: 0, transition: { duration: 0 } });
    }

    let repeatCount = 0;
    while (repeatCount < 5) {
      await animation();
      first = false;
    }
  };

  useEffect(() => {
    handleAnimate();
  }, []);

  return (
    <div className="aspect-square w-full" style={{ height: size }}>
      {col ? (
        <motion.div animate={controls} className="w-full h-full flex bg-white">
          <div className="w-full h-full bg-black" />
          <div className="w-full h-full" />
          <div className="w-full h-full bg-black" />
          <div className="w-full h-full" />
          <div className="w-full h-full bg-black" />
          <div className="w-full h-full" />
          <div className="w-full h-full bg-black" />
        </motion.div>
      ) : (
        <motion.div animate={controls} className="w-full h-full flex flex-col bg-white">
          <div className="w-full h-full bg-black" />
          <div className="w-full h-full bg-white" />
          <div className="w-full h-full bg-black" />
          <div className="w-full h-full bg-white" />
          <div className="w-full h-full bg-black" />
          <div className="w-full h-full bg-white" />
          <div className="w-full h-full bg-black" />
        </motion.div>
      )}
    </div>
  );
};

const LoadingOverlay = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [arr, setArr] = useState<DataArray | undefined>();
  const [rotateDeg, setRotateDeg] = useState(90);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    setArr(createArr(screenWidth, screenHeight));
    setDimensions({ width: screenWidth, height: screenHeight });
  }, []);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    setArr(createArr(screenWidth, screenHeight));
    setDimensions({ width: screenWidth, height: screenHeight });
  }, [window.innerHeight || window.innerWidth]);

  if (!dimensions?.height || !dimensions?.width || !arr) return null;

  return (
    <div className="absolute top-0 left-0 z-20 w-full h-full flex flex-col overflow-hidden">
      {arr.map((row, rIndex) => (
        <div key={rIndex} className="flex bg-white">
          {row.map((col, cIndex) => (
            <AnimatedBox col={col} key={cIndex} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default LoadingOverlay;
