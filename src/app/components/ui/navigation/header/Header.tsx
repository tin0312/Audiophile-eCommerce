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
          <Link href="/category/headphone">Headphones</Link>
          <Link href="/category/earphone">Earphone</Link>
          <Link href="/category/speaker">Speaker</Link>
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </div>
  );
}
