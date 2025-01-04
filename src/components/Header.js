"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const LINKS = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },

  {
    name: "Product",
    path: "/product",
  },
  {
    name: "Shop",
    path: "/shop",
  },
];

const Header = () => {
  const pathname = usePathname();

  const activeClass = (path) => {
    return pathname === path
      ? "text-red-500 font-bold underline"
      : "text-white";
  };

  return (
    <div
      className="containerM  bg-black flex justify-evenly py-6
    "
    >
      {LINKS?.map(({ name, path }, inx) => (
        <Link className={activeClass(path)} key={inx} href={path}>
          {name}
        </Link>
      ))}
    </div>
  );
};

export default Header;
