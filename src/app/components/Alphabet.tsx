"use client";

import React, { useEffect, useState } from "react";
import { Search } from "./Search";
import axios from "axios";

type AlphabetProps = {};

const abc = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

const Alphabet = ({}: AlphabetProps) => {
  const [query, setQuery] = useState<string>(abc[0]);
  const [data, setData] = useState<any>([]);
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    try {
      const options = {
        method: "GET",
        url: `https://wordsapiv1.p.rapidapi.com/words/${
          query ? query : abc[current]
        }`,
        params: {
          letterPattern: "^a.{4}$",
          pronunciationpattern: ".*æm$",
          limit: "100",
          page: "1",
          hasDetails: "hasDetails",
        },
        headers: {
          "X-RapidAPI-Key":
            "07de9a7c77msha015ee42827191ep1af300jsn8e1008c50bf1",
          "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
        },
      };
      const getData = async () => {
        const response = await axios(options);
        setData(response.data.results);
      };
      getData();
    } catch (error) {
      setData([]);
      console.log(error);
    }
  }, [query]);

  const handleClick = (e: number) => {
    setCurrent(e);
    setQuery(abc[e]);
  };

  console.log(data);

  const alphabet = (val: string, idx: number) => {
    return (
      <div
        key={idx}
        onClick={() => handleClick(idx)}
        className={`p-4 ${
          idx == current && "bg-gray-100"
        } rounded hover:border-gray-100 hover:bg-gray-100 cursor-pointer mb-3 text-2xl group-hover:translate-x-1 transition-transform  motion-reduce:transform-none font-semibold`}
      >
        <h2>{val}</h2>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className={`flex align-center justify-center mb-6 `}>
        <p
          className={` text-6xl transition-transform motion-reduce:transform-none`}
        >
          {(query.length > 0 &&
            query[0].toLocaleUpperCase() + query.slice(1, query.length)) ||
            abc[current]}
        </p>
      </div>
      <Search returnValue={setQuery} />

      <div className={`flex  justify-between mb-6 text-2xl font-semibold`}>
        {abc.map((val, idx) => {
          return alphabet(val, idx);
        })}{" "}
      </div>
      <div
        className={`overflow-y-auto max-w-7xl min-w-7xl justify-between mb-1`}
      >
        {data &&
          data.map((word: any, idx: number) => {
            const { definition, partOfSpeech, synonyms, typeOf } = word;
            return (
              <div key={idx} className={`flex items-center mb-8`}>
                <p className="mr-4 text-4xl text-bold">{idx}</p>
                <div className="flex-row">
                  <div className="flex  m-0 ">
                    <p
                      className={`m-0 text-sm opacity-50 italic opacity-90 mr-3`}
                    >{`(${partOfSpeech})`}</p>

                    <span className={`flex`}>
                      {typeOf &&
                        typeOf.map((text: string, idx: number) => {
                          return (
                            <p
                              key={idx}
                              className={`m-0 text-sm mr-1 not-italic`}
                            >
                              {text}
                            </p>
                          );
                        })}
                    </span>
                  </div>
                  <p className={`mb-3 text-xl `}>{definition}</p>
                  <div className={`flex`}>
                    [
                    {synonyms
                      ? synonyms[0]
                          .split(" ")
                          .map((text: string, idx: number) => {
                            return (
                              <p key={idx} className={`m-0 text-sm opacity-90`}>
                                {`${text} `}
                              </p>
                            );
                          })
                      : " ... "}
                    ]
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Alphabet;
