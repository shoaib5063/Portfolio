import { projectsData } from '@/utils/data/projects-data';
import SingleProject from './single-project';

const Projects = () => {

  return (
    <div id='projects' className="relative z-50  my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30" style={{background: '#00ff88'}}></div>
        <div className="flex items-center justify-start relative">
          <span className="absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md" style={{background: '#0b1a13', border: '1px solid #00ff8833', color: '#00ff88', textShadow: '0 0 10px #00ff8866'}}>
            PROJECTS
          </span>
          <span className="w-full h-[2px]" style={{background: 'linear-gradient(to right, #00ff8844, transparent)'}}></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <SingleProject project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;