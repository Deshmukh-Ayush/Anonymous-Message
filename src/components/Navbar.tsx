"use client";

import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { User } from "next-auth";
import { Cherry_Cream_Soda } from "next/font/google";
import { MoveRight } from "lucide-react";

const cherryCreamSoda = Cherry_Cream_Soda({
  weight: ["400"],
  subsets: ["latin"],
});

function Navbar() {
  const { data: session } = useSession();
  const user: User = session?.user;

  return (
    <nav className="w-full h-[10vh] bg-gray-900 text-neutral-100 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <div className="container w-full h-full mx-auto flex md:flex-row justify-between items-center px-4 ">
        <Link
          href="/"
          className={`${cherryCreamSoda.className} text-center text-lg`}
        >
          Whispr
        </Link>

        {session ? (
          <>
            <span className="mr-4">Welcome,{user.username || user.email} </span>
            <Button
              onClick={() => signOut()}
              className="w-full md:w-auto bg-blue-100 text-black"
              variant={"outline"}
            >
              Sign Out
              <MoveRight className="transform transition-transform duration-300 group-hover:-rotate-45" />
            </Button>
          </>
        ) : (
          <Link href="/sign-in">
            <Button
              className="group w-full md:w-auto bg-blue-100 text-black"
              variant={"outline"}
            >
              Sign In
              <MoveRight className="transform transition-transform duration-300 group-hover:-rotate-45" />
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
