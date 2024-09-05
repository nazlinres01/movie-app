import React from "react";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./MenuItem";

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
    <header className="bg-gray-900 text-white p-6 flex justify-between items-center">
      <div className="text-3xl font-bold">MovieApp</div>
      <div className="relative flex items-center flex-grow max-w-xl">
        <input
          type="text"
          placeholder="Search movies..."
          className="w-full bg-gray-800 text-white rounded-full px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
        <BiSearch
          size={24}
          className="absolute right-3 text-gray-400 pointer-events-none"
        />
      </div>
      <nav className="flex space-x-6">
        {menu.map((mn, i) => (
          <MenuItem mn={mn} key={i} />
        ))}
      </nav>
    </header>
  );
};

export default Header;
