import Image from "next/image";

const Logo = () => {
    return (
      <div className="inline-flex items-ceter space-x-1.5">
        <Image src={'/logo.svg'} alt="Logo Pantazi Software" width={34} height={34}/>
      </div>
    );

}

export default Logo;