import React from "react";
import Alphabet from "./(components)/Alphabet";
import { Search } from "./(components)/Search";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div>
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex mb-6">
          <p className="fixed left-0 top-0 flex w-full justify-center bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl">
            Online Dictionary&nbsp;
          </p>
        </div>
        <Alphabet />
      </div>
    </main>
  );
}
