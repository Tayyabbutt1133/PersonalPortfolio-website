import React from "react";
import { RiReactjsLine, RiNextjsLine, RiNodejsLine } from "react-icons/ri";
import { SiDjango } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import {SiMongodb} from 'react-icons/si'

export default function Tech() {
  return (
    <>
      <div className=" border-b border-neutral-800 pb-24">
        <h1 className=" font-lexend uppercase my-20 text-center text-4xl">Technologies</h1>
        <div className=" flex flex-wrap items-center justify-center gap-4">
          <div className="hover:bg-cyan-200 cursor-pointer rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 transform hover:scale-110">
            <RiReactjsLine className="text-4xl text-cyan-400" />
          </div>

          <div className=" cursor-pointer hover:bg-slate-500  rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 transform hover:scale-110">
            <RiNextjsLine className="text-4xl  text-slate-300" />
          </div>
          <div className=" cursor-pointer hover:bg-green-300 rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 transform hover:scale-110">
            <RiNodejsLine className=" text-4xl text-green-400" />
          </div>
          <div className=" cursor-pointer hover:bg-gray-200 rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 transform hover:scale-110">
            <SiExpress className=" text-4xl text-stone-400" />
          </div>
          <div className=" cursor-pointer hover:bg-green-950 rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 transform hover:scale-110">
            <SiDjango className=" text-4xl text-green-600" />
          </div>
          <div className=" cursor-pointer hover:bg-green-200 rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 transform hover:scale-110">
            <SiMongodb className=" text-4xl text-green-400" />
          </div>
        </div>
      </div>
    </>
  );
}
