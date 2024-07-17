import Image from "next/image";

const Logo = () => {
    return (
      <div className="inline-flex items-ceter space-x-1.5">
        <p className="font-semibold text-lg text-black font-poppins">
          Pantazi
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-600">
            Soft
          </span>
        </p>
        {/* <Image src={'/logo.svg'} alt="Logo Pantazi Software" width={34} height={34}/> */}
      </div>
    );

}

export default Logo;