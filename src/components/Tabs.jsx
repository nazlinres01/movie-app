import React from "react";
import Link from "next/link"; // Link'i doğru şekilde import ediyoruz

const Tabs = () => {
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
      {tabs.map((tab, i) => (
        <Link
          key={i} // Her eleman için key eklemeyi unutmayın
          className="cursor-pointer hover:opacity-75 transition-opacity"
          href={`/?genre=${tab.url}`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
