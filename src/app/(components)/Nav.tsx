import { BsGithub } from "react-icons/bs";
import React from "react";
import Link from "next/link";

type Props = {};

export default function Nav({}: Props) {
  return (
    <div className="w-full flex border-b border-black items-center justify-between text-sm lg:flex px-24">
      <p className="flex w-full justify-center p-8 text-xl font-black">
        Online Dictionary&nbsp;
      </p>
      <Link
        className="animate-pulse"
        href="https://github.com/devthedud3"
        target="_blank"
      >
        <BsGithub size={35} />
      </Link>
    </div>
  );
}
