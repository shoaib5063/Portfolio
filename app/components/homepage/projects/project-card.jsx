// @flow strict

import * as React from 'react';

function ProjectCard({ project }) {

  return (
    <div className="relative rounded-lg border w-full" style={{background: 'linear-gradient(to right, #070d0b, #0a1a10)', borderColor: '#1a3d2b'}}>
      <div className="flex flex-row">
        <div className="h-[1px] w-full" style={{background: 'linear-gradient(to right, transparent, #00ff88, #00e5ff)'}}></div>
        <div className="h-[1px] w-full" style={{background: 'linear-gradient(to right, #00e5ff, transparent)'}}></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-yellow-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full" style={{background: '#00ff88'}}></div>
        </div>
        <p className="text-center ml-3 text-base lg:text-xl font-semibold" style={{color: '#00ff88', textShadow: '0 0 10px #00ff8866'}}>
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] px-4 lg:px-8 py-4 lg:py-8" style={{borderColor: '#0f2d1e'}}>
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2" style={{color: '#00ff88'}}>const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2" style={{color: '#00ff88'}}>=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span style={{color: '#00e5ff'}}>{project.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-white">tools:</span>
            <span className="text-gray-400">{` ['`}</span>
            {
              project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span style={{color: '#00ff88'}}>{tag}</span>
                  {
                    project.tools?.length - 1 !== i &&
                    <span className="text-gray-400">{`', '`}</span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-gray-400">{"],"}  </span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
            <span style={{color: '#f59e0b'}}>{project.role}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">Description:</span>
            <span style={{color: '#00e5ff'}}>{' ' + project.description}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div><span className="text-gray-400">{`};`}</span></div>
        </code>
      </div>
    </div>
  );
};

export default ProjectCard;