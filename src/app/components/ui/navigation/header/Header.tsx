"use client";
import Link from "next/link";
import Logo from "@/app/components/shared/Logo";
import Cart from "./Cart";
import { useState } from "react";
import SupportNav from "@/app/components/shared/SupportNav";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isOpenNav, setIsOpenNav] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/category/headphones", label: "Headphones" },
    { path: "/category/earphones", label: "Earphones" },
    { path: "/category/speakers", label: "Speakers" },
  ];

  const openNav = () => {
    setIsOpenNav((prev) => !prev);
  };

  return (
    <>
      <div className="bg-dark-850">
        <nav className="relative mx-auto flex h-24 w-4/5  items-center justify-between  bg-dark-850   py-4 text-white">
          <div className="lg:hidden">
            {isOpenNav ? (
              <button
                className="navbar-close flex w-4 items-center"
                onClick={openNav}
              >
                <svg
                  className="h-6 w-6 cursor-pointer text-white hover:text-primary-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            ) : (
              <button
                onClick={openNav}
                className="navbar-burger flex w-4 items-center  text-white"
              >
                <svg
                  className="block h-4 w-4 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            )}
          </div>
          <Link
            className="flex items-center text-3xl font-bold leading-none md:items-start"
            href="/"
          >
            <Logo />
          </Link>
          <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform gap-6  text-sm uppercase lg:mx-auto lg:flex lg:w-auto lg:items-center lg:space-x-1">
            {links.map(({ path, label }) => (
              <Link
                key={label}
                className={`transition-colors hover:text-primary-700 ${
                  pathname == path ? "text-primary-700" : ""
                }`}
                href={path}
              >
                {label}
              </Link>
            ))}
          </div>
          <Cart />
        </nav>

        {/* Mobile and Tablet Menu */}
        <div
          className={`navbar-menu  absolute bottom-0 left-0 top-24 z-50 h-5/6 w-full ${
            isOpenNav ? "" : "-translate-x-full  "
          }  transition-transform `}
        >
          <div className=" flex w-full flex-col overflow-y-auto rounded-b-xl border-r bg-white px-6 pb-6 pt-10 shadow-2xl">
            <div className="mb-8 flex items-center justify-center self-end"></div>
            <div className=" w-full  py-20">
              <SupportNav />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
