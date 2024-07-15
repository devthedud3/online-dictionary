"use client";
import axios, { CanceledError } from "axios";
import React, { useEffect, useState } from "react";

type Props = {
  word: String;
};

export default function Page({ params: { word } }: { params: Props }) {
  const [details, setDetails] = useState([]);
  const [definition, setDefinition] = useState([]);

  useEffect(() => {
    async function GetDefinition() {
      console.log("theheh", word);
      const { data } = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`
      );

      setDetails(data[0]);
      setDefinition(data[0].meanings[0].definitions);
      try {
      } catch (error) {
        console.error(error);
      }
    }
    GetDefinition();
  }, []);

  return (
    details && (
      <div className="flex flex-col justify-center p-40 pt-0 w-screen space-y-4">
        <h1 className="text-3xl border-b py-6">
          {word}
          <span className="text-xl font-black"> {details?.phonetic}</span>
        </h1>
        {definition.map((obj, index) => (
          <p key={index} className="text-sm pb-4">
            {obj?.definition}
          </p>
        ))}
      </div>
    )
  );
}
