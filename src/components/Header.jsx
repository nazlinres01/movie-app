"use client";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/navigation";
import MenuItem from "./MenuItem";
import ThemeComp from "./ThemeComp";
import { GrLanguage } from "react-icons/gr";

import tr from "../../locales/tr"
import en from "../../locales/en";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("tr");
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const router = useRouter();

  // Dil dosyalarına göre çevirileri ayarla
  const t = selectedLanguage === "tr" ? tr : en;

  const menu = [
    {
      name: t.about,
      url: "/about",
    },
    {
      name: t.signIn,
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

  const handleLanguageChange = (value) => {
    setSelectedLanguage(value);
    setIsLanguageMenuOpen(false);
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
          placeholder={t.searchPlaceholder}
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

        <div className="relative">
          <button
            onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
            className="flex items-center space-x-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-md px-4 py-2 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
          >
            <GrLanguage className="text-xl" />
            <span>{t.language}</span>
          </button>

          {isLanguageMenuOpen && (
            <div className="absolute right-0 mt-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="flex flex-col p-1">
                <button
                  onClick={() => handleLanguageChange("en")}
                  className="flex items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-150 ease-in-out rounded-md"
                >
                  <span>{t.english}</span>
                </button>
                <button
                  onClick={() => handleLanguageChange("tr")}
                  className="flex items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-150 ease-in-out rounded-md"
                >
                  <span>{t.turkish}</span>
                </button>
              </div>
            </div>
          )}
        </div>

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