"use client";
import React, { createContext, useContext, useState } from 'react';
import tr from "../../locales/tr";
import en from "../../locales/en";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("tr");
  const t = selectedLanguage === "tr" ? tr : en;

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
