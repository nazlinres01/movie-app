"use client";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/navigation";
import MenuItem from "./MenuItem";
import ThemeComp from "./ThemeComp";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

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

  const handleSearch = (e) => {
    e.preventDefault();
    if (keyword.length >= 3) {
      router.push(`/search/${keyword}`);
      setKeyword("");
    }
  };

  return (
    <header className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200 p-6 flex items-center justify-between">
      <div className="text-4xl font-extrabold text-gradient bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">
        Movie
      </div>

      <form
        onSubmit={handleSearch}
        className="relative w-1/2 flex items-center mx-8"
      >
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          type="text"
          placeholder="Search movies..."
          className="w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded-full px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
        <button
          type="submit"
          className="absolute right-4 text-gray-500 dark:text-gray-400"
        >
          <BiSearch size={24} />
        </button>
      </form>

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
