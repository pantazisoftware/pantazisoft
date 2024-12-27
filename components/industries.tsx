import React from "react";

const Industries: React.FC = () => {
  return (
    <div className="bg-white py-24 relative">
      <div className="container mx-auto grid grid-cols-6 gap-32 items-start">
        <div className="col-span-6">
          <h2 className="text-7xl font-normal text-black">Industries</h2>
          <p className="text-zinc-500 text-4xl mt-6">
            Focus and dedication in every industry for outstanding results
          </p>
        </div>
        <div id="left" className="col-span-2 z-20">
          <img
            src="/capabilities-shapes.png"
            alt=""
            className="object-fill object-left origin-bottom-left scale-50 lg:scale-75  z-10"
          />
        </div>
        <div id="right" className="z-20 col-span-4">
          <div className="flex flex-col space-y-6 my-12">
            <h3 className="text-4xl text-zinc-500 hover:text-black transition-all duration-200">
              Data Management
            </h3>
            <h3 className="text-4xl text-zinc-500 hover:text-black transition-all duration-200">
              E-Commerce
            </h3>
            <h3 className="text-4xl text-zinc-500 hover:text-black transition-all duration-200">
              Rent Houses
            </h3>
            <h3 className="text-4xl text-zinc-500 hover:text-black transition-all duration-200">
              Logistics
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
