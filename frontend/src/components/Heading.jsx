import React, { useState, useEffect, useCallback } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion"; // npm i framer-motion

import DarkVeil from "../animated/DarkVeil";

const messages = [
  "Welcome to our store",
  "Brew Better Days with Beviamo",
  "Enjoy Premium Coffee at Home",
];

export default function Heading() {
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = back

  /* Rotate every 4 s, always moving “forward” */
  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);

      setIdx((i) => (i + 1) % messages.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  /* Click handlers set the direction explicitly */
  const prev = useCallback(() => {
    setDirection(-1);
    setIdx((i) => (i - 1 + messages.length) % messages.length);
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setIdx((i) => (i + 1) % messages.length);
  }, []);

  /* Variants use the direction prop passed by custom */
  const slide = {
    initial: (d) => ({
      opacity: 0,
      x: d > 0 ? 60 : -60, // start 60 px off‑screen
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.45 },
    },
    exit: (d) => ({
      opacity: 0,
      x: d > 0 ? -20 : 20, // leave opposite side
      transition: { duration: 0.35 },
    }),
  };

  return (
    <div className="h-9 flex justify-center items-center bg-brown-dark">
      <div className="w-full absolute h-80 md:h-28">
        <DarkVeil
          speed={3}
          hueShift={213}
          warpAmount={2}
          noiseIntensity={0.04}
          scanlineFrequency={5}
        />
      </div>
      <div className="relative flex w-[300px] md:w-[500px] justify-center items-center">
        <IoIosArrowBack
          onClick={prev}
          className="absolute left-0 cursor-pointer text-sm text-gray-300 hover:scale-110 hover:text-gray-50"
        />

        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.p
            key={idx}
            className="text-xs tracking-widest font-bold text-white select-none"
            variants={slide}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={direction} // pass direction here
          >
            {messages[idx]}
          </motion.p>
        </AnimatePresence>

        <IoIosArrowForward
          onClick={next}
          className="absolute right-0 cursor-pointer text-sm text-gray-300 hover:scale-110 hover:text-gray-50"
        />
      </div>
    </div>
  );
}
