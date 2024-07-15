import React from "react";
import Alphabet from "./(components)/Alphabet";
import fs from "fs";
import path from "path";
import { Search } from "./(components)/Search";

export default function Home() {
  const filePath = path.join(process.cwd(), "lib", "/words.txt");
  const words = fs.readFileSync(filePath, "utf8").split("\n");

  console.log(words);

  return (
    <main className="flex flex-col items-center justify-between p-40 pt-0 h-screen">
      <section>
        <div className="grid grid-cols-4 border-b border-black py-20">
          <p className="col-span-1">The Gloss</p>
          <div className="col-span-3 h-72 flex flex-col justify-between">
            <p className="text-2xl w-2/3">
              <span className="text-rose-600 font-semibold">
                All things dev in words.{" "}
              </span>
              Browse definitions and learn improve your knowledge and
              understanding of whatever you need to further your career.
            </p>
            <Search />
          </div>
        </div>
        <Alphabet words={words} />
      </section>
    </main>
  );
}
