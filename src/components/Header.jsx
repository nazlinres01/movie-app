import React from "react";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./MenuItem";
import ThemeComp from "./ThemeComp";

const Header = () => {
  const menu = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Sign In",
      url: "/login",
    },
  ];

  return (
    <header className="bg-gray-900 text-white p-6 flex items-center justify-between">
      <div className="text-3xl font-bold">Movie</div>

      <div className="relative w-1/2 flex items-center mx-8">
        <input
          type="text"
          placeholder="Search movies..."
          className="w-full bg-gray-800 text-white rounded-full px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
        <BiSearch
          size={24}
          className="absolute right-4 text-gray-400 pointer-events-none"
        />
      </div>

      <div className="flex items-center space-x-8">
        <ThemeComp />
        <nav className="flex space-x-6">
          {menu.map((mn, i) => (
            <MenuItem mn={mn} key={i} />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
