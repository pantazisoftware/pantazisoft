import Logo from "../header/Logo"

const Footer = () => {
    return (
      <div className="flex flex-col items-start justify-between mt-10 border-t border-gray-200 py-6 content">
        <div id="logo">
          <Logo />
          <p className="text-gray-500 text-sm">
            Digital Solutions, Infinite Possibilities
          </p>
          <p>
            Phone <a href="tel://+40751057981">+40 751 057 981</a>
          </p>
        </div>
      </div>
    );
}

export default Footer;