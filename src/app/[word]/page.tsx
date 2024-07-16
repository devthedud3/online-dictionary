"use client";
import axios, { CanceledError } from "axios";
import React, { useEffect, useState } from "react";
import { ScrapeDefinition } from "../../../lib/data";

type Props = {
  word: String;
};

export default function Page({ params: { word } }: { params: Props }) {
  const [details, setDetails] = useState<any>([]);
  const [definition, setDefinition] = useState([]);

  const newWord = word.replaceAll("%20", " ");
  useEffect(() => {
    async function GetDefinition() {
      const d = await ScrapeDefinition(newWord.toLowerCase());
      setDefinition(d);
      try {
      } catch (error) {
        console.error(error);
      }
    }

    GetDefinition();
  }, []);

  return (
    details && (
      <div className="flex flex-col justify-center p-10 lg:p-10 pt-0 w-screen space-y-4">
        <h1 className="text-3xl border-b border-zinc-700 w-full text-left py-6">
          {newWord}
          <span className="text-xl font-black"> {details?.phonetic || ""}</span>
        </h1>
        {definition.map((obj: any, index) => (
          <p key={index} className="text-sm pb-4">
            {obj?.title}
          </p>
        ))}
      </div>
    )
  );
}
