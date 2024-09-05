"use client";
import React, { useState, useEffect } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { useTheme } from "next-themes";

const ThemeComp = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []); // Bağımlılık dizisini boş bırakın, böylece yalnızca ilk renderda çalışır

  const themeMode = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {mounted && themeMode === "dark" ? (
        <CiLight
          onClick={() => setTheme("light")}
          className="cursor-pointer"
          size={25}
        />
      ) : (
        <CiDark
          onClick={() => setTheme("dark")}
          className="cursor-pointer"
          size={25}
        />
      )}
    </div>
  );
};

export default ThemeComp;
