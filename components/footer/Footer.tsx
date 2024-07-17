import Logo from "../header/Logo"

const Footer = () => {
    return (
      <div className="flex flex-row items-start justify-between mt-10 border-t border-gray-200 py-6 content">
        <div id="logo" className="flex flex-row items-center space-x-2">
          <Logo />
          <p className="text-gray-500 text-xs">
            Digital Solutions, Infinite Possibilities
          </p>
        </div>
        <div id="menu" className="flex flex-row items-center space-x-4">
          <a
            href="#"
            className="font-medium uppercase text-xs text-gray-500 hover:text-black">
            Privacy Policy
          </a>
          <a
            href="#"
            className="font-medium uppercase text-xs text-gray-500 hover:text-black">
            Terms of Use
          </a>
          <a
            href="#"
            className="font-medium uppercase text-xs text-gray-500 hover:text-black">
            Products
          </a>
          <p className="text-xs text-gray-500">&copy; 2024 Pantazi Software SRL</p>
        </div>
      </div>
    );
}

export default Footer;