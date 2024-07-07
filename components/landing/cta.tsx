import Image from "next/image";

const CTA = () => {
    return (
      <div className="h-[calc(100%/0.8)] w-full overflow-hidden">
        <Image
          src={"/hero4.jpeg"}
          width={1200}
          height={1000}
          className="aspect-auto object-cover object-top animate-zoom-rotate w-full h-[calc(100%/1.1)] absolute top-0 -z-10 left-0 right-0 overflow-hidden"
          alt="Digital Solutions, Infinite Possibilities"
        />

        <div className="py-16 lg:py-48 px-4 md:px-8 lg:px-12 space-x-24 relative content">
          <div className="w-full">
            <p className="font-normal text-xs uppercase bg-lime-200 text-lime-700 px-4 py-2 inline mb-5">
              Build your presence online
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-8xl text-white mt-5 font-black tracking-tight">
              Build your amazing
              <br />
              <span className="bg-transparent bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-yellow-300">
                ideas, right now
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-100 font-medium lg:w-6/12 pt-6">
              Unlock online potential with our expertise. Innovate, create, and
              excel in the digital landscape. Discover limitless possibilities
              in web development.
            </p>
            <a
              href="#"
              className="bg-indigo-700 hover:bg-indigo-600 hover:shadow text-lg my-10 font-medium text-white px-6 py-3 inline-flex space-x-1 items-center">
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