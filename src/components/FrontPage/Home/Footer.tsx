"use client";
import { Facebook, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-[#ecf5ff] dark:bg-slate-800">
      <div className=" w-[80%] mx-auto  py-16 ">
        <div className="w-full flex flex-col md:flex-row pb-12 md:gap-0 gap-12  ">
          <div className=" md:w-[30%] w-full ">
            <Image
              src={"https://cdn-icons-png.flaticon.com/128/602/602175.png"}
              alt=""
              width={100}
              height={100}
            />
            <h1 className=" text-base text-slate-800">
              Design amazing digital experiences that
            </h1>
            <h1 className=" text-base text-slate-800">
              create more happy in the world.
            </h1>
          </div>
          <div className=" md:w-[70%] w-full ">
            <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-12 ">
              <div className=" space-y-2">
                <h1 className=" text-lg text-slate-800">Product</h1>
                <h1 className=" text-base text-slate-800">Overview</h1>
                <h1 className=" text-base text-slate-800">Features</h1>
                <h1 className=" text-base text-slate-800">Solutions</h1>
                <h1 className=" text-base text-slate-800">Tutorials</h1>
              </div>
              <div className=" space-y-2">
                <h1 className=" text-lg text-slate-800">Company</h1>
                <h1 className=" text-base text-slate-800">About Us</h1>
                <h1 className=" text-base text-slate-800">Careers</h1>
                <h1 className=" text-base text-slate-800">Press</h1>
                <h1 className=" text-base text-slate-800">News</h1>
              </div>
              <div className=" space-y-2">
                <h1 className=" text-lg text-slate-800">Resources</h1>
                <h1 className=" text-base text-slate-800">Blog</h1>
                <h1 className=" text-base text-slate-800">Newsletter</h1>
                <h1 className=" text-base text-slate-800">Events</h1>
                <h1 className=" text-base text-slate-800">Support</h1>
              </div>
              <div className=" space-y-2">
                <h1 className=" text-lg text-slate-800">Social</h1>
                <h1 className=" text-base text-slate-800">Twitter</h1>
                <h1 className=" text-base text-slate-800">Linkedin</h1>
                <h1 className=" text-base text-slate-800">Facebook</h1>
                <h1 className=" text-base text-slate-800">GitHub</h1>
              </div>
              <div className=" space-y-2">
                <h1 className=" text-lg text-slate-800">Legal</h1>
                <h1 className=" text-base text-slate-800">Terms</h1>
                <h1 className=" text-base text-slate-800">Privacy</h1>
                <h1 className=" text-base text-slate-800">Cookies</h1>
                <h1 className=" text-base text-slate-800">Licenses</h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" border-b "></div>
        <div className=" mx-auto  pt-5 flex flex-col md:flex-row justify-between items-center">
          <h1>
            {" "}
            &copy; {currentYear}{" "}
            <a href="https://material-tailwind.com/">Heritage- Nest</a>. All
            Rights Reserved.
          </h1>
          <div className=" flex items-center gap-4 text-blue-800">
            <Facebook />
            <Linkedin />
            <Github />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
