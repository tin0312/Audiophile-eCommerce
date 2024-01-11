"use client";
import Link from "next/link";
import Logo from "@/app/components/shared/Logo";
import Cart from "./Cart";
import Image from "next/image";
import { useState } from "react";
import SupportNav from "@/app/components/shared/SupportNav";

export default function Header() {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const openNav = () => {
    setIsOpenNav((prev) => !prev);
  };

  return (
    <>
      <div className="bg-dark-850">
        <nav className="relative mx-auto flex h-24 w-4/5  items-center justify-between  bg-dark-850   py-4 text-white">
          <div className="lg:hidden">
            <button
              onClick={openNav}
              className="navbar-burger flex items-center p-3 text-white"
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
          </div>
          <a
            className="flex items-center text-3xl font-bold leading-none md:items-start"
            href="/"
          >
            <Logo />
          </a>

          <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform gap-6  text-sm uppercase lg:mx-auto lg:flex lg:w-auto lg:items-center lg:space-x-1">
            <Link href="/" className="tablet:bg-red-700">
              Home
            </Link>
            <Link href="/category/headphones">Headphones</Link>
            <Link href="/category/earphones">Earphones</Link>
            <Link href="/category/speakers">Speakers</Link>
          </div>
          <Cart />
        </nav>
        <div className="navbar-menu absolute bottom-0 left-0 top-0 z-50 h-5/6 w-full rounded-xl shadow-2xl ">
          {/* <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div> */}
          <div className=" flex w-full flex-col overflow-y-auto border-r bg-white px-6 pb-6 pt-10">
            <div className="mb-8 flex items-center justify-center self-end">
              <button className="navbar-close" onClick={openNav}>
                <svg
                  className="h-6 w-6 cursor-pointer text-black hover:text-primary-500"
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
            </div>
            <div className="w-full pt-20">
              <SupportNav />
            </div>
          </div>
        </div>
      </div>

      {/* My */}
      {/* <div className="bg-dark-850">
        <div className="tablet:flex-col mx-auto flex h-24 w-4/5 items-center justify-between text-white">
          <div>
            <Logo />
          </div>
          <div className="flex gap-6 text-sm uppercase">
            <Link href="/" className="tablet:bg-red-700">
              Home
            </Link>
            <Link href="/category/headphones">Headphones</Link>
            <Link href="/category/earphones">Earphones</Link>
            <Link href="/category/speakers">Speakers</Link>
          </div>
          <div>
            <Cart />
          </div>
        </div>
      </div> */}
    </>
  );
}

{
  /* <div className="flex gap-6 text-sm uppercase">
<Link href="/" className="tablet:bg-red-700">
  Home
</Link>
<Link href="/category/headphones">Headphones</Link>
<Link href="/category/earphones">Earphones</Link>
<Link href="/category/speakers">Speakers</Link>
</div>
<div className="mt-auto">
<div className="">
  <Cart />
</div>
</div> */
}
