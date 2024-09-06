"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams ? searchParams.get("genre") : null;
  const [activeGenre, setActiveGenre] = useState(genre);

  useEffect(() => {
    setActiveGenre(genre);
  }, [genre]);

  const tabs = [
    {
      name: "En Popüler",
      url: "popular",
    },
    {
      name: "En Son",
      url: "latest",
    },
    {
      name: "Yakında Gelecekler",
      url: "upcoming",
    },
  ];

  return (
    <div className="p-5 m-5 bg-gray-100 dark:bg-gray-900 flex items-center justify-center gap-7">
      {tabs.map((tab) => (
        <Link
          key={tab.url}
          className={`cursor-pointer hover:opacity-75 transition-opacity ${
            activeGenre === tab.url ? "underline underline-offset-8 text-amber-600" : ""
          }`}
          href={`/?genre=${tab.url}`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
