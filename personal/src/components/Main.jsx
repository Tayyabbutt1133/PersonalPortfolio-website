import React from "react";
import personel from "../assets/cover.jpg";
import { HERO_CONTENT } from "../constants/index.js";
import { delay, motion } from "framer-motion";

const container = () => ({
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay, // use the delay parameter
    },
  },
});

export default function Main() {
  return (
    <>
      <div id="home" className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div name="main-inner" className="flex flex-wrap justify-around">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start gap-4">
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className=" font-lexend name pb-12 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl text-slate-300"
              >
                Tayyeb Butt
              </motion.h1>
              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                SOFTWARE ENGINEER
              </span>
              <p className=" text-sm">{HERO_CONTENT}</p>
            </div>
          </div>
          <div className=" w-full lg:w-[37%] lg:p-8">
            <div className="">
              <img className=" rounded-lg" src={personel} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
