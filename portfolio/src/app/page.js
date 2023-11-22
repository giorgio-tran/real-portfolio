"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isMouseDown, setIsMouseDown] = useState(false);

  return (
    <main className="flex min-h-screen flex-col">
      <header className="fixed w-full flex justify-between px-32 items-center top-1/4 mix-blend-difference font-semibold tracking-widest z-50">
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
      <div className="min-h-screen w-full bg-white flex items-end text-black justify-center relative">
        <div
          className="scene"
          onMouseDown={() => {
            console.log("clicked");
            setIsMouseDown(true);
          }}
          onMouseMove={(e) => {
            if (isMouseDown) {
              console.log(e.clientX, e.clientY);
            }
          }}
          onMouseUp={() => {
            console.log("unclicked");
            setIsMouseDown(false);
          }}
        >
          <div className="cube">
            <div className="cube__face cube__face--front">
              <div className="w-full h-full text-sm p-4">
                <h1 className="text-xl">About Me</h1>
                <p>
                  Hello, my name is Giorgio Tran. I am a Master's in Computer
                  Science student at the University of Hawaii at Manoa expected
                  to graduate in Fall 2024.
                </p>
              </div>
            </div>
            <div className="cube__face cube__face--back">back</div>
            <div className="cube__face cube__face--right">right</div>
            <div className="cube__face cube__face--left">left</div>
            <div className="cube__face cube__face--top">top</div>
            <div className="cube__face cube__face--bottom">bottom</div>
          </div>
        </div>
      </div>
      <div className="min-h-screen w-full bg-black"></div>
    </main>
  );
}
