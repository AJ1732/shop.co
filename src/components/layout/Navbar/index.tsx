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
import { Navigation } from "./components";
import { cn } from "@/lib/utils";

const navlinks: NavLinks[] = [
  {
    name: "shop",
    link: "/shop",
  },
  {
    name: "categories",
    link: ["/category/1", "/category/2"],
  },
];

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <header className="content-grid fixed z-50 w-full bg-white">
      <nav className="flex items-center justify-between gap-4 border-b border-black/10 py-3 md:py-4 lg:py-6">
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
          <Navigation className="max-lg:hidden" />
        </div>

        <InputField
          startIcon={<SearchIcon />}
          placeholder="Search for products..."
          className="ml-auto min-w-[36rem] bg-shade-200 max-lg:hidden"
          iconProps={{
            className: "max-lg:hidden stroke-black/40",
          }}
        />

        <div className="flex items-center justify-center gap-4 *:size-6">
          <div className="lg:hidden">
            <SearchIcon className="size-6" />
          </div>

          <Link href={"/cart"}>
            <ShoppingCart />
          </Link>

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

        <nav className="z-10 h-fit rounded-2xl bg-black px-8 py-10 text-white">
          <Navigation />
          {/* <ul className="flex flex-col items-start justify-center gap-6">
            {navlinks.map(({ name, link }) => {
              return (
                <li key={name} className="text-xl">
                  {Array.isArray(link) ? (
                    <div className="flex items-center justify-center gap-1">
                      <span>{name}</span>
                      <ChevronDown className="mt-1 stroke-shade-200" />
                    </div>
                  ) : (
                    <Link href={link} className="block">
                      {name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul> */}
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
