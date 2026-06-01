// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md" style={{background: '#0b1a13', border: '1px solid #00ff8833'}}>
          ABOUT ME
        </span>
        <span className="h-36 w-[2px]" style={{background: '#00ff8844'}}></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-xl uppercase" style={{color: '#00ff88', textShadow: '0 0 12px #00ff8866'}}>
            Who I am?
          </p>
          <p className="text-gray-300 text-sm lg:text-lg leading-relaxed">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="Shoaib Ahmed"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
            style={{boxShadow: '0 0 30px #00ff8833'}}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;