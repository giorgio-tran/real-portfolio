"use client";
import Link from "next/link";
import { useState } from "react";
import { experience } from "./data/experience";
import { projects } from "./data/projects";
import Experience from "./components/Experience";
import Image from "next/image";
import Pill from "./components/Pill";

export default function Home() {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [rotateCube, setRotateCube] = useState({
    x: -10,
    y: 15,
  });

  return (
    <main
      className={`flex bg-black min-h-screen flex-col ${
        isMouseDown ? `cursor-grabbing` : ""
      }`}
      onMouseMove={(e) => {
        if (isMouseDown) {
          setRotateCube({
            x: rotateCube.x + -e.movementY,
            y: rotateCube.y + e.movementX,
          });
        }
      }}
      onMouseUp={() => {
        console.log("unclicked");
        setIsMouseDown(false);
      }}
      onTouchMove={(e) => {
        console.log("touch move");
        console.log(e.touches[0]);
        if (isMouseDown) {
          setRotateCube({
            x: rotateCube.x + -e.movementY,
            y: rotateCube.y + e.movementX,
          });
        }
      }}
      onTouchEnd={() => {
        setIsMouseDown(false);
      }}
    >
      <div className="overflow-hidden lg:min-h-screen lg:w-1/2 lg:fixed flex flex-col justify-between bg-gray-100 text-gray-900 lg:py-20 lg:pl-20">
        <div className="text-9xl font-bold">
          <div>Giorgio</div>
          <div>Tran</div>
        </div>
        <div className="flex gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-10 w-10"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-10 w-10"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
          </svg>
        </div>
      </div>

      <div className="lg:w-1/2 lg:self-end px-10 bg-slate-950 text-gray-100">
        <div className="flex justify-center items-center my-20">
          <div
            className={`scene ${isMouseDown ? "" : `cursor-grab`}`}
            onMouseDown={() => {
              console.log("clicked");
              setIsMouseDown(true);
            }}
            onTouchStart={() => {
              console.log("touch start");
              setIsMouseDown(true);
            }}
          >
            <div
              className="cube"
              style={{
                transform: `translateZ(-200px) rotateX(${rotateCube.x}deg) rotateY(${rotateCube.y}deg)`,
              }}
            >
              <div className="cube__face cube__face--front">
                <div className="w-full h-full text-sm p-4">
                  <h1 className="text-xl pb-3">About Me</h1>
                  <p>
                    Hello, my name is Giorgio Tran. I am a graduate student
                    pursuing a Master's in Computer Science at the University of
                    Hawaii at Manoa. I expect to graduate in Fall 2024.
                  </p>
                </div>
              </div>
              <div className="cube__face cube__face--back">
                <div className="w-full h-full text-sm p-4">
                  <h1 className="text-xl pb-3">Awards 🏆</h1>
                  <ul>
                    <li>HACC 2023 3rd Place</li>
                    <li>HACC 2022 2nd Place</li>
                  </ul>
                </div>
              </div>
              <div className="cube__face cube__face--right">
                <div className="w-full h-full text-sm p-4">
                  <h1 className="text-xl pb-3">Technologies</h1>
                  <ul>
                    <li>Java</li>
                    <li>Python</li>
                    <li>Javascript</li>
                    <li>Typescript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>
              <div className="cube__face cube__face--left">
                <div className="w-full h-full text-sm p-4">
                  <h1 className="text-xl pb-3">Experience</h1>
                  <ul>
                    <li>UH Manoa - TA</li>
                    <li>Oceanit - SWE Intern</li>
                  </ul>
                </div>
              </div>
              <div className="cube__face cube__face--top">
                <div className="w-full h-full text-sm p-4">
                  <h1 className="text-xl pb-3">Inspiration</h1>
                  <p>
                    When I went to Seattle for the first time, I was amazed by
                    the glass artwork at the Chihuly Garden and Glass exhibit.
                    The Persian Ceiling was my favorite piece and that
                    experience heavily influenced the design of my portfolio. If
                    you haven't been there, I highly recommend it!
                  </p>
                </div>
              </div>
              <div className="cube__face cube__face--bottom">
                <div className="w-full h-full text-sm p-4">
                  <h1 className="text-xl pb-3">Contact Me</h1>
                  <div>Email</div>
                  <Link
                    href="mailto:ttran2@hawaii.edu"
                    className="hover:underline"
                  >
                    ttran2@hawaii.edu
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="lg:text-7xl font-bold w-full mt-40 mb-3">
            Experience
          </h1>
          <div className="py-3 flex flex-col gap-6">
            {experience.map((job, index) => (
              <Experience job={job} key={index} />
            ))}
          </div>
        </div>
        <div className="pb-40">
          <h1 className="lg:text-7xl font-bold w-full mt-40 mb-3">Projects</h1>
          <div className="flex flex-col gap-6">
            {projects.map((project, index) => (
              <div className="w-full" key={index}>
                <div className="flex md:w-3/4 md:pr-4 justify-between items-baseline">
                  <div className="font-bold text-xl">{project.name}</div>
                  <div className="text-sm flex gap-3">
                    {project.links &&
                      project.links.map((link, index) => (
                        <Link
                          href={link.url}
                          key={index}
                          className="flex gap-1 items-center hover:text-blue-400"
                        >
                          {link.name}{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4"
                          >
                            <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
                            <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
                          </svg>
                        </Link>
                      ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3 md:flex-row">
                  <div className="md:w-3/4">
                    <div className="text-sm py-1 leading-normal">
                      {project.description}
                    </div>
                    <div className="flex flex-wrap gap-x-1.5 gap-y-1 py-2">
                      {project.technologies.map((tech, index) => (
                        <Pill key={index}>{tech}</Pill>
                      ))}
                    </div>
                  </div>
                  <div className="lg:w-1/4">
                    <Image
                      src={project.image}
                      width={200}
                      height={200}
                      className="border-gray-500 border rounded"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="min-h-screen w-full bg-black"></div> */}
    </main>
  );
}
