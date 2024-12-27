import React from "react";

const Capabilities: React.FC = () => {
  return (
    <div className="bg-black py-24 relative">
      <div className="container mx-auto grid grid-cols-6 gap-32 items-start">
        <div id="left" className="col-span-2 z-20">
          <h2 className="text-7xl font-normal text-white">Capabilities</h2>
          <img
            src="/capabilities-shapes.png"
            alt=""
            className="absolute bottom-48 -left-12 object-fill object-left origin-bottom-left scale-50 lg:scale-75  z-10"
          />
        </div>
        <div id="right" className="z-20 col-span-4">
          <p className="text-zinc-500 text-4xl max-w-3xl">
            We are the team behind the idea, transforming to reality with skills
            and knowledge.
          </p>
          <div className="flex flex-col space-y-6 my-12">
            <h3 className="text-4xl text-zinc-400 hover:text-white transition-all duration-200">
              Naming
            </h3>
            <h3 className="text-4xl text-zinc-400 hover:text-white transition-all duration-200">
              Branding
            </h3>
            <h3 className="text-4xl text-zinc-400 hover:text-white transition-all duration-200">
              Website Structure & Construction
            </h3>
            <h3 className="text-4xl text-zinc-400 hover:text-white transition-all duration-200">
              UI / UX Design
            </h3>
            <h3 className="text-4xl text-zinc-400 hover:text-white transition-all duration-200">
              Front-end Development
            </h3>
            <h3 className="text-4xl text-zinc-400 hover:text-white transition-all duration-200">
              Back-end Development
            </h3>
            <h3 className="text-4xl text-zinc-400 hover:text-white transition-all duration-200">
              E-commerce Integration
            </h3>
            <h3 className="text-4xl text-zinc-400 hover:text-white transition-all duration-200">
              CMS Implementation
            </h3>
            <h3 className="text-4xl text-zinc-400 hover:text-white transition-all duration-200">
              Search Engine Optimization
            </h3>
            <h3 className="text-4xl text-zinc-400 hover:text-white transition-all duration-200">
              Performance Optimization
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
