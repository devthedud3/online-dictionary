"use client";
import React, { useState } from "react";

type SearchProps = {
  returnValue?: (e: any) => void;
};

export const Search = ({ returnValue }: SearchProps) => {
  const aZ = "#abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  const [letter, setLetter] = useState("#");

  function handleClick(n: number) {
    setLetter(aZ[n]);
    const section = document.getElementById(`letter-${aZ[n]}`);
    section && section.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="flex text-md font-semibold space-x-1 w-[350px] lg:w-[1000px] overflow-x-scroll">
      {aZ.map((val, idx) => (
        <div
          key={idx}
          onClick={() => handleClick(idx)}
          className={`px-2 transition ${
            val === letter
              ? "bg-[--primary] text-white border-[--primary]"
              : "border-black"
          } rounded hover:border-[--primary] border-2 cursor-pointer mb-3 font-semibold`}
        >
          <h2>{val}</h2>
        </div>
      ))}
    </div>
  );
};
