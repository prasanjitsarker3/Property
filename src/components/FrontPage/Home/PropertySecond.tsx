import { Play, Search } from "lucide-react";
import Image from "next/image";
import React from "react";

const PropertySecond = () => {
  return (
    <div>
      <div className="relative h-full w-full md:pt-60 py-16">
        <div className="container mx-auto flex flex-col md:flex-row md:gap-0 gap-24">
          <div className="space-y-4 text-center md:text-left  md:w-1/2 w-full">
            <h1 className="text-3xl md:text-3xl text-[#d95d0f]">
              Property Buying
            </h1>
            <h1 className="text-3xl md:text-5xl vigaRegular text-slate-800">
              Efficient and Transparent
            </h1>
            <h1 className="text-3xl md:text-5xl vigaRegular text-slate-800">
              Home Buying Solutions
            </h1>
            <div className="text-slate-800 py-6">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page
              </p>
              <p>when looking at its layout.</p>
            </div>
            <div>
              <button className="py-2 px-5 bg-[#ecf5ff] text-[#0059b1] flex items-center justify-center md:justify-start gap-3 mx-auto md:mx-0">
                <Search /> Find Property
              </button>
            </div>
          </div>
          <div className="flex justify-center w-full md:w-1/2">
            <div className="relative">
              <Image
                src={
                  "https://img.freepik.com/premium-photo/modern-ecofriendly-residential-complex-with-lush-greenery-sunset-urban-setting-featuring_82570-494.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_hybrid"
                }
                alt="Ecofriendly Residential Complex"
                width={500}
                height={500}
                className="rounded-lg w-[300px] h-[200px] md:w-[500px] md:h-[300px]"
              />
              <div className="absolute -bottom-12 -right-12 md:-right-40 md:bottom-32">
                <Image
                  src={
                    "https://img.freepik.com/free-photo/3d-house-model-with-modern-architecture_23-2151004062.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_hybrid"
                  }
                  alt="3D House Model"
                  width={500}
                  height={500}
                  className="rounded-lg w-[300px] h-[200px] md:w-[500px] md:h-[300px]"
                />
                <div className="absolute right-8 bottom-16 -mt-4 md:-left-4 md:mt-16 top-0 h-12 w-12 md:h-14 md:w-14 flex justify-center items-center text-white bg-[#0059b1] rounded-full">
                  <Play />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full py-16">
        <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between md:gap-12 gap-24">
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <Image
                src={
                  "https://img.freepik.com/premium-photo/modern-ecofriendly-residential-complex-with-lush-greenery-sunset-urban-setting-featuring_82570-494.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_hybrid"
                }
                alt="Ecofriendly Residential Complex"
                width={500}
                height={500}
                className="rounded-lg w-[300px] h-[200px] md:w-[500px] md:h-[300px]"
              />
              <div className="absolute -bottom-12 -right-12 md:-right-40 md:-bottom-32">
                <Image
                  src={
                    "https://img.freepik.com/free-photo/3d-house-model-with-modern-architecture_23-2151004062.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_hybrid"
                  }
                  alt="3D House Model"
                  width={500}
                  height={500}
                  className="rounded-lg w-[300px] h-[200px] md:w-[500px] md:h-[300px]"
                />
                <div className="absolute right-8 bottom-16 -mt-4 md:right-32 md:-mt-4 top-0 h-12 w-12 md:h-14 md:w-14 flex justify-center items-center text-white bg-[#0059b1] rounded-full">
                  <Play />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-3xl md:text-3xl text-[#d95d0f]">
              Property Buying
            </h1>
            <h1 className="text-3xl md:text-5xl vigaRegular text-slate-800">
              Efficient and Transparent
            </h1>
            <h1 className="text-3xl md:text-5xl vigaRegular text-slate-800">
              Home Buying Solutions
            </h1>
            <div className="text-slate-800 py-6">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page
              </p>
              <p>when looking at its layout.</p>
            </div>
            <div>
              <button className="py-2 px-5 bg-[#ecf5ff] text-[#0059b1] flex items-center justify-center md:justify-start gap-3 mx-auto md:mx-0">
                <Search /> Find Property
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySecond;
