// import React from "react";
import { companies } from "@/data";

// const TechStack = () => {
//   return (
//     <div className="py-20" >
//       <h1 className="heading">
//         My <span className="text-purple">Tech Stack</span>
//       </h1>
//       <div className="flex flex-col  items-center max-lg:mt-10">
//         <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 ">
//           {companies.map(({ id, img, name, nameImg }) => (
//             <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
//               <img className="md:w-10 w-5" src={img} alt={name} />
//               <img className="md:w-24 w-20" src={nameImg} alt={name} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TechStack;

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import Image from "next/image";

export function MyTechStack() {
  const links_1 = [
    {
      title: "React",
      icon: <Image src="/re.svg" width={20} height={20} alt="React Logo" />,
      href: "https://react.dev/",
    },
    {
      title: "React Native",
      icon: <Image src="/re.svg" width={20} height={20} alt="React Logo" />,
      href: "https://reactnative.dev/",
    },

    {
      title: "Next.js",
      icon: <Image src="/next.svg" width={20} height={20} alt="Nextjs Logo" />,
      href: "https://nextjs.org/",
    },
    {
      title: "Typescript",
      icon: <Image src="/ts.svg" width={20} height={20} alt="Typescript Logo" />,
      href: "https://www.typescriptlang.org/",
    },
    {
      title: "Tailwind CSS",
      icon: <Image src="/tail.svg" width={20} height={20} alt="Tailwind CSS Logo" />,
      href: "https://tailwindcss.com/",
    },
    {
      title: "HTML5",
      icon: <Image src="/html.svg" width={20} height={20} alt="HTML5 Logo" />,
      href: "https://html.com/",
    },
    {
      title: "CSS3",
      icon: <Image src="/css.svg" width={20} height={20} alt="CSS3 Logo" />,
      href: "https://css3.com/",
    },
    {
      title: "Firebase",
      icon: <Image src="/fire.svg" width={20} height={20} alt="Firebase Logo" />,
      href: "https://firebase.google.com/",
    },

    {
      title: "Redux",
      icon: <Image src="/redux.svg" width={20} height={20} alt="Github Logo" />,
      href: "https://redux.js.org/",
    },

    {
      title: "Nodejs",
      icon: <Image src="/node.svg" width={20} height={20} alt="Github Logo" />,
      href: "https://nodejs.org/en",
    },

    {
      title: "Express.js",
      icon: <Image src="/express.svg" width={20} height={20} alt="Github Logo" />,
      href: "https://expressjs.com/",
    },
    {
      title: "MongoDB",
      icon: <Image src="/mongodb.svg" width={20} height={20} alt="Github Logo" />,
      href: "https://www.mongodb.com/s",
    },

   
  ];
  const links_2 = [
    
    {
      title: "Jest",
      icon: <Image src="/jest.svg" width={20} height={20} alt="Jest Logo" />,
      href: "https://jestjs.io/",
    },
    {
      title: "React Testing Library",
      icon: <Image src="/octopus.png" width={20} height={20} alt="React Testing Library Logo" />,
      href: "https://testing-library.com/",
    },
    {
      title: "GitHub",
      icon: <Image src="/git.svg" width={20} height={20} alt="Github Logo" />,
      href: "https://github.com/",
    },
    {
      title: "Docker",
      icon: <Image src="/dock.svg" width={20} height={20} alt="Docker Logo" />,
      href: "https://www.docker.com/",
    },
    {
      title: "AWS",
      icon: <Image src="/aws.svg" width={20} height={20} alt="Docker Logo" />,
      href: "https://aws.amazon.com/",
    },
    {
      title: "Jenkins",
      icon: <Image src="/jenkins.svg" width={20} height={20} alt="Docker Logo" />,
      href: "https://www.jenkins.io/",
    },
    {
      title: "Linux",
      icon: <Image src="/linux.svg" width={20} height={20} alt="Docker Logo" />,
      href: "https://www.linux.org/",
    },
   
  ];
  return (
    <div id="skills" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">Tech Stack</span>
      </h1>
      <div className="flex items-center justify-center h-[10rem] w-full">
        <FloatingDock
          mobileClassName="translate-y-20" // only for demo, remove for production
          items={links_1}
        />
      </div>
      <div className="flex items-center justify-center w-full">
        <FloatingDock
          mobileClassName="translate-y-20" // only for demo, remove for production
          items={links_2}
        />
      </div>
    </div>
  );
}
