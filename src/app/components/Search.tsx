"use client";
import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

type SearchProps = {
  returnValue: (e: any) => void;
};

export const Search = ({ returnValue }: SearchProps) => {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: any) => {
    e.preventDefault();
    const { value } = e.target;
    setSearch(value);
  };

  const onSubmit = () => {
    returnValue(search);
  };
  return (
    <div className="w-full">
      <Box
        component="form"
        onChange={handleChange}
        className={`flex items-center flex-row mb-3`}
      >
        <TextField
          className={` rounded`}
          id="outlined-basic"
          label="Search by query or definition"
          name="Animal"
          fullWidth
          value={search}
          variant="outlined"
        />
        <div
          className="border cursor-pointer p-4 ml-3 rounded bg-black text-white hover:bg-gray-800 transition-transform "
          onClick={onSubmit}
        >
          Search
        </div>
      </Box>
    </div>
  );
};
