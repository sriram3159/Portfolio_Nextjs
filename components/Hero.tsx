import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full  h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80  h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className=" h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className=" max-w-[89vw]   flex flex-col items-center justify-center">
          <h2 className="text-blue-100 uppercase tracking-widest text-xs text-center max-w-80">Dynamic Web js</h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concept into Seamless User Experience"
          />
          <p className="text-center tracking-wider text-sm md:text-lg lg:text-2xl m-4">
            Hi, I&apos;m Sriram, a Frontend Developer specializing in Next.js, React, and React Native, building dynamic
            and responsive web and mobile applications.
          </p>
          <div className="flex justify-center items-baseline gap-4">
            <a href="#about">
              <MagicButton title="Show my work" icon={<FaLocationArrow />} position="right" />
            </a>
            {/* <a href="https://drive.google.com/file/d/1PI2MqHyINm9NdMiG-ahKkk73F3LmddYf/view?usp=sharing" target="_blank"><div  className=" inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Resume
            </div></a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
