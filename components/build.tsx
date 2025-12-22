import Image from "next/image";
import React from "react";

const BuildYourIdea: React.FC = () => {
  return (
    <div className="container mx-auto mb-12">
      <h2 className="text-4xl font-medium  mb-16">
        Build ideas, create experiences
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-1">
          <Image
            src="/build3.jpg"
            alt="Idea"
            className="rounded-3xl object-auto h-full"
            layout="responsive"
            placeholder="blur"
            loading="lazy"
            style={{ objectFit: "contain" }}
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
            width={100}
            height={600}
          />
        </div>
        <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 col-span-2">
          <div className="p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.2}
              stroke="currentColor"
              className="size-16 text-white bg-white/20 rounded-2xl p-4 mb-4">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>

            <h3 className="text-2xl font-medium text-white mb-2">
              Ideea is the ignition
            </h3>
            <p className="text-white/80 font-medium">
              We help you bring your ideas to life by providing you with the
              tools and resources you need to succeed.
            </p>
          </div>
          <div className="p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.2}
              stroke="currentColor"
              className="size-16 text-white bg-white/20 rounded-2xl p-4 mb-4">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>

            <h3 className="text-2xl font-medium text-white">Our Expertise</h3>
            <p className="text-white/80 font-medium">
              Our team of experts has years of experience, knowledge, and
              skills. We provide comprehensive support and guidance.
            </p>
          </div>
          <div className="p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.2}
              stroke="currentColor"
              className="size-16 text-white bg-white/20 rounded-2xl p-4 mb-4">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>

            <h3 className="text-2xl font-medium text-white">Concept</h3>
            <p className="text-white/80 font-medium">
              We work closely with you to understand your vision and goals,
              ensuring that every detail is meticulously planned and executed.
            </p>
          </div>
          <div className="p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.2}
              stroke="currentColor"
              className="size-16 text-white bg-white/20 rounded-2xl p-4 mb-4">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>

            <h3 className="text-2xl font-medium text-white">Results</h3>
            <p className="text-white/80 font-medium">
              We have a proven track record of delivering high-quality projects
              on time, ensuring client satisfaction and success.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
    </div>
  );
};

export default BuildYourIdea;
