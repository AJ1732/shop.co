"use client";
import Link from "next/link";
import { useState } from "react";

import {
  AlignLeft,
  CircleUserRound,
  SearchIcon,
  ShoppingCart,
} from "lucide-react";
import { NavLinks } from "@/types/navlink";
import { InputField } from "@/components";
import { cn } from "@/lib/utils";

const navlinks: NavLinks[] = [
  {
    name: "shop",
    link: "/shop",
  },
  {
    name: "categories",
    link: ["/category/1"],
  },
];

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <header className="content-grid fixed z-50 w-full bg-white">
      <nav className="flex items-center justify-between gap-4 py-3 md:py-4 lg:py-6">
        <div className="flex items-center justify-between gap-8">
          {/* MOBILE TOGGLE */}
          <button
            className="active:scale-95 lg:hidden"
            onClick={() => setOpenNav((prev) => !prev)}
          >
            <AlignLeft className="size-8" />
          </button>

          {/* LOGO */}
          <Link href={`/`}>
            <h1 className="my-auto font-integral text-2xl lg:mb-2 lg:text-[2rem]">
              SHOP.CO
            </h1>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <ul className="flex items-center justify-center gap-6 max-lg:hidden">
            {navlinks.map(({ name, link }) => (
              <li key={name} className="text-xl">
                {Array.isArray(link) ? (
                  <div className="relative">
                    <div className="cursor-pointer">{name}</div>
                  </div>
                ) : (
                  <Link href={link} className="block">
                    {name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <InputField
          startIcon={<SearchIcon />}
          placeholder="Search for products..."
          className="min-w-[36rem] bg-shade-200 max-lg:hidden"
          iconProps={{
            className: "max-lg:hidden stroke-black/40",
          }}
        />

        <div className="flex items-center justify-center gap-4 *:size-6">
          <div className="lg:hidden">
            <SearchIcon className="size-6" />
          </div>
          <ShoppingCart />
          <CircleUserRound />
        </div>
      </nav>

      {/* MOBILE NAVIGATION */}
      <div
        className={cn(
          "full-width content-grid absolute top-full min-h-[calc(100dvh-4rem)] w-full lg:!hidden",
          !openNav && "!hidden",
        )}
      >
        <div
          onClick={() => setOpenNav((prev) => !prev)}
          className="full-width absolute inset-0 size-full bg-shade-100/50 backdrop-blur-sm"
        />

        <nav className="z-10 h-40 bg-black px-8 py-6 text-white">
          <ul className="flex flex-col items-start justify-center gap-6">
            {navlinks.map(({ name, link }) => (
              <li key={name} className="text-xl">
                {Array.isArray(link) ? (
                  <div>{name}</div>
                ) : (
                  <Link href={link} className="block">
                    {name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
