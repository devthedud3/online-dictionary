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
    <div className="">
      {aZ.map((letter, index) => {
        const groupedWords = words.filter((word) => word.startsWith(letter));
        return (
          <section
            key={`${letter}-${index}`}
            id={`letter-${letter}`}
            className={`w-full justify-between px-10 py-24 ${
              index !== aZ.length - 1 && "border-b"
            } border-zinc-700 grid lg:grid-cols-4`}
          >
            <div className="relative pb-10 lg:pb-0">
              <p className="text-5xl ">{letter}</p>
              <p className="absolute text-[--primary] top-0 left-8 text-md font-black">
                {groupedWords.length}
              </p>
            </div>
            <div className="w-full col-span-3 gap-1 grid lg:grid-cols-2">
              {groupedWords.length > 0 ? (
                groupedWords.map((word) => (
                  <Link
                    key={word}
                    href={`/${word.toLocaleLowerCase()}`}
                    className="group w-fit"
                  >
                    <p className="cursor-pointer">{word}</p>
                    <div className="transition-all duration-300 h-2 border-b-2 border-b-[--primary] group-hover:w-full w-0" />
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
