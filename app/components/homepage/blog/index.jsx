// @flow strict
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import BlogCard from './blog-card';

function Blog({ blogs }) {

  if (!blogs || blogs.length === 0) return null;

  return (
    <div id='blogs' className="relative z-50 border-t my-12 lg:my-24" style={{borderColor: '#0f2d1e'}}>
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px]" style={{background: '#00ff8844'}}></span>
          <span className="w-fit text-white p-2 px-5 text-xl rounded-md" style={{background: '#0b1a13', border: '1px solid #00ff8833', color: '#00ff88', textShadow: '0 0 10px #00ff8866'}}>
            Blogs
          </span>
          <span className="w-24 h-[2px]" style={{background: '#00ff8844'}}></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {
          blogs.slice(0, 6).map((blog, i) => (
            blog?.cover_image &&
            <BlogCard blog={blog} key={i} />
          ))
        }
      </div>

      <div className="flex justify-center  mt-5 lg:mt-12">
        <Link
          className="flex items-center gap-1 hover:gap-3 rounded-full px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider no-underline transition-all duration-200 ease-out hover:no-underline md:font-semibold"
          style={{background: 'linear-gradient(to right, #00ff88, #00b4d8)', color: '#070d0b', fontWeight: 700}}
          role="button"
          href="/blog"
        >
          <span>View More</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default Blog;