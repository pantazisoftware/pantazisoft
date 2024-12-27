import React from "react";

const Models: React.FC = () => {
  return (
    <div className="bg-black py-24">
      <div className="container mx-auto grid grid-cols-6 gap-32 items-start">
        <div id="left" className="col-span-6 z-20">
          <h2 className="text-7xl font-normal text-white">Engagement Models</h2>
        </div>
        <div id="right" className="col-span-6 flex flex-col space-y-24">
          <div
            id="item"
            className="p-12 border-b-2 rounded-full border-[#69F8FF] flex flex-row items-start space-x-4">
            <h3 className="text-7xl text-white tracking-wide px-14">Finite</h3>
            <div>
              <p className="text-zinc-500 text-3xl">
                <span className="text-white">Perfect for projects</span> with
                well-defined goals. <br />
                <span className="text-white">Offers fixed project pricing</span>
                based on estimated hours, ensuring a predictable and controlled
                process.
              </p>
            </div>
          </div>
          <div
            id="item"
            className="p-12 border-b-4  rounded-full border-[#FFE433] flex flex-row items-start space-x-4">
            <h3 className="text-7xl text-white tracking-wide px-14">Infinte</h3>
            <div>
              <p className="text-zinc-500 text-3xl">
                <span className="text-white">Perfect for projects</span> with
                well-defined goals. <br />
                <span className="text-white">
                  Offers fixed project pricing
                </span>{" "}
                based on estimated hours, ensuring a predictable and controlled
                process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Models;
