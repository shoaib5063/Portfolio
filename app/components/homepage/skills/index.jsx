// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24" style={{borderColor: '#0f2d1e'}}>
      <div className="w-[100px] h-[100px] rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20" style={{background: '#00ff88'}}></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] w-full" style={{background: 'linear-gradient(to right, transparent, #00ff88, transparent)'}} />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px]" style={{background: '#00ff8844'}}></span>
          <span className="w-fit text-white p-2 px-5 text-xl rounded-md" style={{background: '#0b1a13', border: '1px solid #00ff8833', color: '#00ff88', textShadow: '0 0 10px #00ff8866'}}>
            Skills
          </span>
          <span className="w-24 h-[2px]" style={{background: '#00ff8844'}}></span>
        </div>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}>
              <div
                className="h-full w-full rounded-lg shadow-none transition-all duration-500 border border-[#1a3d2b] hover:border-[#00ff88]"
                style={{
                  background: '#0b1a13',
                }}
              >
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full" style={{background: 'linear-gradient(to right, transparent, #00ff88, transparent)'}} />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-white text-sm sm:text-lg">
                    {skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;