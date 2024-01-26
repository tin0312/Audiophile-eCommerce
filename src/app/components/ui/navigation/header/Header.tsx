"use client";
import Link from "next/link";
import Logo from "@/app/components/shared/Logo";
import Cart from "./Cart";
import GuestIcon from "./GuestIcon";
import UserIcon from "./UserIcon";
import { AuthContextType, useAuthContext } from "@/context/AuthContext";

export default function Header() {
  const { user } = useAuthContext() as AuthContextType;
  return (
    <div className="bg-dark-850">
      <div className="mx-auto flex h-24 w-4/5 items-center justify-between text-white ">
        <div>
          <Logo />
        </div>
        <div className="flex gap-6 text-sm uppercase">
          <Link href="/">Home</Link>
          <Link href="/category/headphones">Headphones</Link>
          <Link href="/category/earphones">Earphones</Link>
          <Link href="/category/speakers">Speakers</Link>
        </div>

        <div>{user ? <UserIcon /> : <GuestIcon />}</div>
        <div>
          <Cart />
        </div>
      </div>
    </div>
  );
}
