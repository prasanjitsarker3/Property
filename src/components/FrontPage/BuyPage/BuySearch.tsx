import { Input } from "@nextui-org/react";
import { Search } from "lucide-react";
import React from "react";

const BuySearch = () => {
  return (
    <div className=" md:w-1/2 w-full md:px-0 px-20 mx-auto">
      <div className=" bg-white shadow p-12 space-y-3 rounded-md">
        <div className=" flex items-center gap-3">
          <h1 className="text-base text-slate-800">Buy</h1>
          <h1 className="text-base text-slate-800">Rent</h1>
          <h1 className="text-base text-slate-800">PG</h1>
          <h1 className="text-base text-slate-800">Plot</h1>
        </div>
        <div>
          <Input startContent={<Search />} placeholder="Search Properties" />
        </div>
        <div className=" grid grid-cols-3 gap-6">
          <div>
            <h1 className=" text-base text-slate-800">Your Location</h1>
            <Input placeholder="First" />
          </div>
          <div>
            <h1 className=" text-base text-slate-800">Property Type</h1>
            <Input placeholder="First" />
          </div>
          <div>
            <h1 className=" text-base text-slate-800">Budget</h1>
            <Input placeholder="First" />
          </div>
        </div>
        <button className="py-2 px-5 w-full bg-[#0059b1] rounded text-white flex items-center justify-center gap-3 mx-auto md:mx-0">
          <Search /> Find Property
        </button>
      </div>
    </div>
  );
};

export default BuySearch;
