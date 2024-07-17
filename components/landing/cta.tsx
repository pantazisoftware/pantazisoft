import Image from "next/image";

const CTA = () => {
    return (
      <div className="h-[calc(100%/0.8)] w-full overflow-hidden bg-white">
        <div className="py-16 lg:py-48 px-4 md:px-8 lg:px-12 space-x-24 relative content">
          <div className="w-full flex flex-col items-center">
            <div className="font-medium rounded-full uppercase bg-gradient-to-br from-rose-400 to-purple-700 text-purple-700 p-[2px] inline mb-5">
              <p className="px-4 py-1.5 bg-white rounded-full text-sm">
                🏋🏼 From ideas to product
              </p>
            </div>
            <h1 className="font-poppins text-5xl text-center md:text-6xl lg:text-8xl text-black mt-5 font-bold tracking-tight">
              Build your amazing
              <br />
              <span className="bg-transparent bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-indigo-600">
                ideas, right now
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-center text-gray-500 font-medium sm:w-9/12 lg:w-6/12 pt-6">
              Unlock online potential with our expertise. Innovate, create, and
              excel in the digital landscape. Discover limitless possibilities
              in web development.
            </p>
            <a
              href="#"
              className="bg-transparent rounded-lg bg-gradient-to-br from-purple-500 hover:from-purple-600 to-indigo-700 hover:to-indigo-800 transition-all duration-100 ease-linear border-t border-white/50 hover:shadow text-lg my-10 font-medium text-white px-6 py-3 inline-flex space-x-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <span>Discover our Services</span>
            </a>
          </div>
        </div>
      </div>
    );
}

export default CTA;