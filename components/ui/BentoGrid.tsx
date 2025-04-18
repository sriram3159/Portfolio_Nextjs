"use client";
import { cn } from "@/utils/cn";
import { GradientBg } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto", className)}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  spareImg,
  titleClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: Number;
  img?: string;
  imgClassName?: string;
  spareImg?: string;
  titleClassName?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("sriram3159@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  dark:bg-black dark:border-white/[0.2] bg-white border justify-between flex flex-col space-y-4  border-white-100/[0.1]",
        className
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(104,165,185,1) 88%, rgba(0,212,255,1) 100%)",
      }}
    >
      <div className={` ${id === 6 && "flex justify-center items-center h-full"}`}>
        <div className="w-full h-full absolute">
          {img && <img src={img} className={cn(imgClassName, "object-cover object-center  ")} />}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
          {img && <img src={spareImg} className={"object-cover object-center h-full w-full "} />}
        </div>
        {id === 6 && <GradientBg></GradientBg>}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>
          {/* {id === 2 && <GlobeDemo />} */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute right-0 ">
              <div className="flex flex-col gap-1 ">
                {["React.js", "React Native", "Next.js"].map((item) => (
                  <span
                    key={item}
                    className="py-2   px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
              </div>
              <div className="flex flex-col gap-1 ">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                {["TypeScript", "Redux", "Git"].map((item) => (
                  <span
                    key={item}
                    className="py-2  px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-5`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                  }}
                />
              </div>
              <MagicButton
                title={copied ? "Email Copied" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
