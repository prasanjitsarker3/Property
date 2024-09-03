/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React from "react";
import img from "../../../../public/Photo/pro.png";
import { Search } from "lucide-react";

import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className=" relative">
      <div className="relative h-[100vh]  w-full">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/Photo/banner.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-60  text-white">
          <div className=" h-full flex items-center justify-center">
            <div className=" flex flex-col space-y-2 ">
              <h1 className="text-2xl md:text-6xl font-bold mb-1 vigaRegular text-center">
                Your Portal to India's
              </h1>
              <h1 className="text-2xl md:text-6xl font-bold mb-1 vigaRegular text-center">
                Exquisite Real Estate
              </h1>
              <div>
                <p className="text-lg md:text-2xl py-3 text-white">
                  Handpicked and ethically sourced for the best taste.
                </p>
              </div>
              <div className=" flex justify-center">
                <button className="py-2 px-5 bg-[#0059b1] flex items-center gap-3">
                  <Search /> Find Property
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
