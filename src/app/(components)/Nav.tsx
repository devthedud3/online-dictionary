import { BsGithub } from "react-icons/bs";
import React from "react";
import Link from "next/link";

type Props = {};

export default function Nav({}: Props) {
  return (
    <div className="w-full flex border-b border-zinc-700 items-center justify-between text-sm lg:flex px-6">
      <Link
        href="/"
        className="flex w-full justify-center p-8 text-xl font-black text-nowrap"
      >
        The Glossary&nbsp;
      </Link>
      <Link
        className="animate-pulse hidden md:block"
        href="https://github.com/devthedud3/online-dictionary"
        target="_blank"
      >
        <BsGithub size={35} />
      </Link>
    </div>
  );
}
