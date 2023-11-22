"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [rotateCube, setRotateCube] = useState({
    x: -10,
    y: 15,
  });

  return (
    <main
      className={`flex min-h-screen flex-col ${
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
      <header className="fixed w-full flex justify-between px-32 items-center top-1/4 mix-blend-difference font-semibold tracking-widest z-20">
        <div className="flex flex-col">
          <h1 className="text-9xl">Giorgio</h1>
          <h1 className="text-9xl">Tran</h1>
        </div>
        <div className="flex flex-col text-7xl gap-4">
          <Link href="#">LinkedIn</Link>
          <Link href="#">GitHub</Link>
        </div>
      </header>
      <div className="min-h-screen w-full relative bg-black z-10">
        <div className="absolute rounded-full h-[30vw] w-[30vw] bg-blue-600 top-1/4 -translate-y-1/2 left-10" />
        <div className="absolute rounded-full h-[50vw] w-[50vw] bg-red-500 top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2" />
        <div className="absolute rounded-full h-[20vw] w-[20vw] bg-green-500 top-3/4 left-3/4" />
        <div className="absolute rounded-full h-[40vw] w-[40vw] bg-yellow-500 top-3/4 left-1/4 -translate-x-3/4 -translate-y-1/4" />
      </div>
      <div className="min-h-screen w-full bg-transparent flex items-end text-black justify-center relative">
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
              <div className="w-full h-full text-sm p-4 text-blue-800">
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
                  When I went to Seattle for the first time, I was amazed by the
                  glass artwork at the Chihuly Garden and Glass exhibit. The
                  Persian Ceiling was my favorite piece and that experience
                  heavily influenced the design of my portfolio. If you haven't
                  been there, I highly recommend it!
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
      <div className="min-h-screen w-full bg-black"></div>
    </main>
  );
}
