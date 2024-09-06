"use client";
import React from "react";
import Image from "next/image";

const Movies = ({ dt }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
      <div className="relative">
        <Image
          width={450}
          height={300}
          className="object-cover w-full h-72"
          src={`https://image.tmdb.org/t/p/original/${dt.backdrop_path || dt.poster_path}`}
          alt={dt.title || dt.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
        <div className="absolute bottom-4 left-4 text-white drop-shadow-lg space-y-1">
          <h3 className="text-2xl font-bold">{dt.title || dt.name}</h3>
          <p className="text-sm">{dt.release_date || dt.first_air_date}</p>
        </div>
      </div>
    </div>
  );
};

export default Movies;
