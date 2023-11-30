"use client";
import logo from "@/public/logo.svg";
import hamburgerBtn from "@/public/hamburger-menu-icon.svg";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const Nav = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <nav className="mx-auto flex max-w-screen-xl items-center p-5">
      <Link href="/" className="mr-5">
        <Image src={logo} alt="logo" />
      </Link>
      <div
        className={clsx(
          "absolute  left-1/2 top-[-100%] w-[90%] -translate-x-1/2 rounded-lg bg-[var(--primary-2)] md:static md:left-0 md:w-full  md:translate-x-0 md:bg-white",
          mobileNav && "top-[9%]",
        )}
      >
        <ul className="flex w-full flex-col items-center gap-8 rounded-md p-10 text-2xl font-bold text-white md:w-auto md:flex-row md:gap-[4vw] md:text-[1rem]  md:text-[var(--neutral-100)]">
          <li>
            <Link className="hover:text-black" href="/">
              Features
            </Link>
          </li>
          <li>
            <Link className="hover:text-black" href="/">
              Pricing
            </Link>
          </li>
          <li>
            <Link className="hover:text-black" href="/">
              Resources
            </Link>
          </li>
          <div className="h-[.01rem] w-full bg-white/40" />
          <li className="md:ml-auto">
            <Link className="hover:text-black " href="/">
              Login
            </Link>
          </li>
          <li>
            <Link
              className="btn  block whitespace-nowrap rounded-full p-3"
              href="/"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
      <div className="ml-auto">
        <button
          className="h-6 w-6 md:hidden"
          onClick={() => setMobileNav((prev) => !prev)}
        >
          <Image src={hamburgerBtn} alt="hamburger menu" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
