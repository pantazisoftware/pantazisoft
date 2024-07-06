import Image from "next/image";

const CTA = () => {
    return (
      <div className="py-16 pr-4 lg:py-32 flex flex-row items-center space-x-24 relative content">
        <div className="w-full lg:w-7/12 z-10 bg-white rounded-tr-[150px] py-10">
            <p className="font-normal text-sm bg-lime-200 text-lime-700 px-4 py-2 inline mb-5">Build your presence online</p>
          <h1 className="text-5xl md:text-5xl lg:text-7xl mt-5 font-medium tracking-tight">
            Digital Solutions,<br />
            <span className="bg-transparent bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-indigo-700 underline">Infinite Possibilities</span>
          </h1>
          <p className="text-xl w-11/12 text-gray-600 pt-6">
            Unlock online potential with our expertise. Innovate, create, and
            excel in the digital landscape. Discover limitless possibilities in
            web development.
          </p>
          <a
            href="#"
            className="bg-indigo-700 hover:bg-indigo-600 hover:shadow text-lg my-10 font-medium text-white px-6 py-3 inline-flex">
            Discover Solutions
          </a>
        </div>
        <div className="hidden lg:block lg:w-7/12 h-full z-0 lg:absolute right-0 top-24">
          <Image
            src={"/slide-1.jpg"}
            width={10}
            height={10}
            className="aspect-auto object-cover h-64 w-64"
            alt="Digital Solutions, Infinite Possibilities"
            layout="responsive"
          />
        </div>
      </div>
    );
}

export default CTA;