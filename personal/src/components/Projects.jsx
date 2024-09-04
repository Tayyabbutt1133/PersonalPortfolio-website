import React from "react";
import { PROJECTS } from "../constants/index.js";

export default function Projects() {
  return (
    <>
      <div id="projects" className=" border-b border-neutral-900 pb-4">
        <h2 className=" font-lexend uppercase my-20 text-center text-4xl">Projects</h2>
        <div>
          {PROJECTS.map((project, index) => (
            <div key={index} className=" mb-8 flex flex-wrap lg:justify-center">
             <div className=" w-full lg:w-1/4">
                      <img width={150} height={150} src={project.image} alt={project.title} className=" mb-6 rounded" />
                  </div>
                  <div className=" w-full max-w-xl lg:w-3/4">
                      <h6>{project.title}</h6>
                      <p className=" mb-4 text-neutral-400">{project.description}</p>
                      {/* projects live and code links  */}
                <div>
                  <a href={project.Livedemo} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">Live Demo</a>
                  <a href={project.Github} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-pink-400">Github Code</a>
                  </div>
                  </div>
                 
              </div>
              
          ))}
        </div>
      </div>
    </>
  );
}
