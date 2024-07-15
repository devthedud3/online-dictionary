import React from "react";
import Alphabet from "./(components)/Alphabet";
import fs from "fs";
import path from "path";
import { Search } from "./(components)/Search";

export default function Home() {
  const filePath = path.join(process.cwd(), "lib", "/words.txt");
  const words = fs.readFileSync(filePath, "utf8").split("\n");

  return (
    <main className="flex flex-col items-center justify-between p-10 lg:p-40 pt-0  h-screen">
      <section>
        <div className="grid lg:grid-cols-4 border-b border-zinc-700 py-10">
          <p className="col-span-1 text-xs font-sans pb-10 lg:py-0 text-nowrap">
            The Gloss
          </p>
          <div className="col-span-3 flex flex-col justify-between space-y-20">
            <p className="text-xl w-2/3 text-gray-500">
              <span className="text-white font-semibold">
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
