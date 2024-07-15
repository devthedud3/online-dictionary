"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

type AlphabetProps = {
  words: string[];
};

const Alphabet: React.FC<AlphabetProps> = ({ words }) => {
  const aZ = "#abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

  return (
    <div className="flex flex-col">
      {aZ.map((letter, index) => {
        const groupedWords = words.filter((word) => word.startsWith(letter));
        return (
          <section
            key={`${letter}-${index}`}
            id={`letter-${letter}`}
            className={`w-full justify-between py-24 ${
              index !== aZ.length - 1 && "border-b"
            } border-black grid grid-cols-4`}
          >
            <div className="relative">
              <p className="text-5xl ">{letter}</p>
              <p className="absolute text-rose-600 top-0 left-8 text-md font-black">
                {groupedWords.length}
              </p>
            </div>
            <div className="w-full col-span-3 gap-6 grid grid-cols-2">
              {groupedWords.length > 0 ? (
                groupedWords.map((word) => (
                  <Link
                    key={word}
                    href={`/${word.toLocaleLowerCase()}`}
                    className="group w-fit"
                  >
                    <p className="cursor-pointer">{word}</p>
                    <div className="transition-all duration-300 h-2 border-b-2 border-b-red-400 group-hover:w-full w-0" />
                  </Link>
                ))
              ) : (
                <p className="col-span-2">{`No terms are currently indexed for the letter –> [${letter}]`}</p>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Alphabet;
