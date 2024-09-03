"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Home,
  Instagram,
  Menu,
  MoonIcon,
  Phone,
  Route,
  SunIcon,
  X,
} from "lucide-react";
import { ThemeSwitcher } from "../UtlitiFunction/ThemeSwitcher";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        scrolling
          ? "bg-white dark:bg-slate-800 fixed w-full z-40"
          : "fixed w-full z-40 bg-white"
      }`}
    >
      <div className="container mx-auto py-3 flex justify-between items-center md:px-0 px-8">
        <div className="hidden md:block">
          <div className="flex items-center gap-3 ">
            <Link href={"/buy"}>
              {" "}
              <h1 className="text-lg text-slate-800">Buy</h1>
            </Link>
            <h1 className="text-lg text-slate-800">Sell</h1>
            <h1 className="text-lg text-slate-800">Service</h1>
          </div>
        </div>
        <div>
          <h1 className="text-lg text-slate-800">Logo</h1>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <h1 className="text-lg text-slate-800">Manage Rentals</h1>
          <Link href={"/login"}>
            <button className="border-none">Sign In</button>
          </Link>
        </div>
        <button className="md:hidden text-slate-800" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden md:hidden"
      >
        <div className="flex flex-col items-center bg-white dark:bg-slate-800">
          <Link href="#" className="py-2 text-lg text-slate-800">
            Manage Rentals
          </Link>
          <button className="py-2 border-none text-lg text-slate-800">
            Sign In
          </button>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
