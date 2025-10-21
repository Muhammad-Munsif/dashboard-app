import React, { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { FiBell, FiLogOut, FiSettings, FiUser } from "react-icons/fi";

const Navbar = ({sidebarToggle, setSidebarToggle, isMobile}) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);


  const navbarClasses = `bg-indigo-600 p-4 flex justify-between transition-all <duration-300 ${
    isMobile 
      ? 'fixed top-0 left-0 right-0 z-50' 
      : sidebarToggle 
        ? '' 
        : 'ml-64'
  }`

  return (
    <nav className={navbarClasses}>
      <div className="flex items-center text-xl">
        <FaBars 
          className="text-white me-4 cursor-pointer" 
          onClick={() => setSidebarToggle(!sidebarToggle)}
        />
        <span className="text-white font-semibold text-nowrap">E-commerce</span>
      </div>
      <div className="flex items-center gap-x-5">
        <div className="relative md:w-65">
          <span className="relative md:absolute inset-y-0 left-0 flex pl-2 items-center">
            <button className=" block p-1 focus:outline-none text-white md:text-black">
              <FaSearch className="text-red-600 " />
            </button>
          </span>
          <input
            type="text"
            className="w-full bg-white outline-none px-4 py-1 pl-12 rounded shadow hidden md:block"
          />
        </div>
      </div>
      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <button className="relative p-2 text-white hover:text-gray-900 hover:bg-gray-100 rounded-full">
          <FiBell className="h-5 w-5" />
          <span className="absolute top-0 right-0 block h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Settings */}
        <button className="p-2 text-white hover:text-gray-900 hover:bg-gray-100 rounded-full">
          <FiSettings className="h-5 w-5" />
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
              <FiUser className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-medium hover:text-black text-white hidden md:block">
              John Doe
            </span>
          </button>

          {/* Dropdown Menu */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-40 border border-gray-200">
              <a
                href="#"
                className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FiUser className="mr-2 h-4 w-4" />
                Profile
              </a>
              <a
                href="#"
                className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FiSettings className="mr-2 h-4 w-4" />
                Settings
              </a>
              <div className="border-t border-gray-100 my-1"></div>
              <a
                href="#"
                className="flex px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              >
                <FiLogOut className="mr-2 h-4 w-4" />
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;