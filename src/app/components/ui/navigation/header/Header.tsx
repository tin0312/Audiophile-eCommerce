"use client";
import Link from "next/link";
import Logo from "@/app/components/shared/Logo";
import Cart from "./Cart";

export default function Header() {
  return (
    <div className = "bg-dark-850">
      <div className="mx-auto flex h-24 w-4/5 items-center justify-between text-white ">
        <div>
          <Logo />
        </div>
        <div className="flex gap-6 uppercase text-sm">
          <Link href="/">Home</Link>
          <Link href="/category/headphones">Headphones</Link>
          <Link href="/category/earphones">Earphone</Link>
          <Link href="/category/speakers">Speaker</Link>
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </div>
  );
}
