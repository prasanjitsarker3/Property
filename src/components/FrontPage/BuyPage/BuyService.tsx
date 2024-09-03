import { Download } from "lucide-react";
import React from "react";

const BuyService = () => {
  return (
    <div className=" container mx-auto py-16">
      <div className=" grid grid-cols-4 gap-4">
        <div className=" bg-[#FDF0E7] p-5 space-y-2">
          <h1 className=" text-4xl font-bold vigaRegular text-[#d95d0f]">
            2K+
          </h1>
          <h1 className=" text-base text-slate-800 ">New Flat Listed</h1>
          <div className="text-[#d95d0f] flex justify-between items-center">
            <h1 className="border-b border-[#d95d0f]">View All</h1>
            <Download className=" border border-[#d95d0f] rounded-full h-8 w-8 p-1" />
          </div>
        </div>
        <div className=" bg-[#ecf5ff] p-5 space-y-2">
          <h1 className=" text-4xl font-bold vigaRegular text-[#ecf5ff]"> .</h1>
          <h1 className=" text-base text-slate-800 ">New Flat Listed</h1>
          <div className="text-[#0059b1] flex justify-between items-center">
            <h1 className=" border-b border-[#0059b1]">View All</h1>
            <Download className=" border border-[#0059b1] rounded-full h-8 w-8 p-1" />
          </div>
        </div>
        <div className=" bg-[#FDF0E7] p-5 space-y-2">
          <h1 className=" text-4xl font-bold vigaRegular text-[#d95d0f]">
            2K+
          </h1>
          <h1 className=" text-base text-slate-800 ">New Flat Listed</h1>
          <div className="text-[#d95d0f] flex justify-between items-center">
            <h1 className="border-b border-[#d95d0f]">View All</h1>
            <Download className=" border border-[#d95d0f] rounded-full h-8 w-8 p-1" />
          </div>
        </div>
        <div className=" bg-[#ecf5ff] p-5 space-y-2">
          <h1 className=" text-4xl font-bold vigaRegular text-[#0059b1]">
            2K+
          </h1>
          <h1 className=" text-base text-slate-800 ">New Flat Listed</h1>
          <div className="text-[#0059b1] flex justify-between items-center">
            <h1 className=" border-b border-[#0059b1]">View All</h1>
            <Download className=" border border-[#0059b1] rounded-full h-8 w-8 p-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyService;
