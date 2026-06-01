// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";


function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is {' '}
            <span style={{color: '#00ff88', textShadow: '0 0 16px #00ff8899'}}>{personalData.name}</span>
            {` , I'm a Professional `}
            <span style={{color: '#00e5ff', textShadow: '0 0 16px #00e5ff99'}}>{personalData.designation}</span>
            .
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all duration-300 hover:scale-125"
              style={{color: '#00ff88'}}
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all duration-300 hover:scale-125"
              style={{color: '#00ff88'}}
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.facebook}
              target='_blank'
              className="transition-all duration-300 hover:scale-125"
              style={{color: '#00ff88'}}
            >
              <FaFacebook size={30} />
            </Link>

          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" style={{background: 'linear-gradient(to right, #00ff88, #00b4d8)'}} className="p-[1px] rounded-full transition-all duration-300">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#070d0b] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3" style={{background: '#0b1a13', color: '#00ff88'}}>
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              className="flex items-center gap-1 hover:gap-3 rounded-full px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider no-underline transition-all duration-200 ease-out md:font-semibold"
              style={{background: 'linear-gradient(to right, #00ff88, #00b4d8)', color: '#070d0b', fontWeight: 700}}
              role="button"
              target="_blank"
              href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>

        </div>
        <div className="order-1 lg:order-2 relative rounded-lg border" style={{background: 'linear-gradient(to right, #070d0b, #0a1a10)', borderColor: '#1a3d2b'}}>
          <div className="flex flex-row">
            <div className="h-[1px] w-full" style={{background: 'linear-gradient(to right, transparent, #00ff88, #00e5ff)'}}></div>
            <div className="h-[1px] w-full" style={{background: 'linear-gradient(to right, #00e5ff, transparent)'}}></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
              <div className="h-3 w-3 rounded-full" style={{background: '#00ff88'}}></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] px-4 lg:px-8 py-4 lg:py-8" style={{borderColor: '#0f2d1e'}}>
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2" style={{color: '#00ff88'}}>const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2" style={{color: '#00ff88'}}>=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span style={{color: '#00e5ff'}}>Shoaib Ahmed</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span style={{color: '#00ff88'}}>Python</span>
                <span className="text-gray-400">{"', '"}</span>
                <span style={{color: '#00ff88'}}>Java</span>
                <span className="text-gray-400">{"', '"}</span>
                <span style={{color: '#00ff88'}}>JavaScript</span>
                <span className="text-gray-400">{"', '"}</span>
                <span style={{color: '#00ff88'}}>React</span>
                <span className="text-gray-400">{"', '"}</span>
                <span style={{color: '#00ff88'}}>TensorFlow</span>
                <span className="text-gray-400">{"', '"}</span>
                <span style={{color: '#00ff88'}}>PyTorch</span>
                <span className="text-gray-400">{"', '"}</span>
                <span style={{color: '#00ff88'}}>MongoDB</span>
                <span className="text-gray-400">{"', '"}</span>
                <span style={{color: '#00ff88'}}>Go</span>
                <span className="text-gray-400">{"', '"}</span>
                <span style={{color: '#00ff88'}}>Scikit-learn</span>
                <span className="text-gray-400">{"'],"}  </span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                <span style={{color: '#f59e0b'}}>true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                <span style={{color: '#f59e0b'}}>true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                <span style={{color: '#f59e0b'}}>true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2" style={{color: '#00ff88'}}>hireable:</span>
                <span style={{color: '#f59e0b'}}>function</span>
                <span className="text-gray-400">{'() {'}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2" style={{color: '#f59e0b'}}>return</span>
                <span className="text-gray-400">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24" style={{color: '#00e5ff'}}>this.</span>
                <span className="mr-2 text-white">hardWorker</span>
                <span style={{color: '#00ff88'}}>&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24" style={{color: '#00e5ff'}}>this.</span>
                <span className="mr-2 text-white">problemSolver</span>
                <span style={{color: '#00ff88'}}>&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24" style={{color: '#00e5ff'}}>this.</span>
                <span className="mr-2 text-white">skills.length</span>
                <span className="mr-2" style={{color: '#00ff88'}}>&gt;=</span>
                <span style={{color: '#f59e0b'}}>5</span>
              </div>
              <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
              <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
              <div><span className="text-gray-400">{`};`}</span></div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;