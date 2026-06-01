// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative border-t text-white" style={{background: '#050c08', borderColor: '#0f2d1e'}}>
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2" style={{background: 'linear-gradient(to right, transparent, #00ff88, transparent)'}}></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-400">
            © Portfolio by <Link target="_blank" href="https://www.linkedin.com/in/shoaib5063/" style={{color: '#00ff88'}}>Shoaib Ahmed</Link>
          </p>
          <div className="flex items-center gap-5 mt-3 md:mt-0">
            <Link
              target="_blank"
              href="https://github.com/shoaib5063"
              className="flex items-center gap-2 uppercase text-gray-400 transition-colors duration-300"
              style={{}}
              onMouseEnter={undefined}
            >
              <IoStar style={{color: '#00ff88'}} />
              <span className="hover:text-[#00ff88] transition-colors duration-300">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;