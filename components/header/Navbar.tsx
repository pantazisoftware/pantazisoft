import Logo from "./Logo"

const Navbar = () => {
    return (
      <nav className="border-b border-white/10 py-6 w-full flex justify-between items-center content">
        <div>
          <Logo />
        </div>
        <div className="flex flex-row items-center space-x-12">
          <a href="#" className="font-semibold uppercase text-sm text-gray-500 hover:text-gray-900">
            Solutions
          </a>
          <a href="#" className="font-semibold uppercase text-sm text-gray-500 hover:text-gray-900">
            About
          </a>
          <a href="#" className="font-semibold uppercase text-sm text-gray-500 hover:text-gray-900">
            Products
          </a>
        </div>
        <div>
          <a
            href="#"
            className="font-medium text-indigo-200 hover:text-white px-6 py-3 bg-indigo-700 hover:bg-indigo-600 inline-flex space-x-1.5 items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <span>Contact</span>
          </a>
        </div>
      </nav>
    );
}

export default Navbar;