import Image from "next/image";
import React from "react";

const Service = () => {
  const serviceData = [
    {
      id: 1,
      img: "https://cdn-icons-png.flaticon.com/128/17619/17619598.png",
      name: "Advanced Property Search",
      title:
        "Effortlessly find your dream property with advanced search filters.",
    },
    {
      id: 2,
      img: "https://cdn-icons-png.flaticon.com/128/17619/17619598.png",
      name: "Virtual Tours and Multimedia",
      title:
        "Explore properties through immersive virtual tours and HD photos.",
    },
    {
      id: 3,
      img: "https://cdn-icons-png.flaticon.com/128/17619/17619598.png",
      name: "Secure Online Transactions",
      title:
        "Effortlessly find your dream property with advanced search filters.",
    },
  ];

  return (
    <div className="pt-40 pb-16">
      <div className="container mx-auto">
        <h1 className=" vigaRegular text-4xl text-center text-slate-800 py-7">
          Other Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:px-0 px-8">
          {serviceData.map((data) => (
            <div
              key={data.id}
              className="px-5 py-8 rounded-lg bg-[#ecf5ff] flex gap-3 "
            >
              <div className="">
                <Image
                  src={data.img}
                  alt={data.name}
                  width={60}
                  height={60}
                  className=" bg-[#f1eae6] rounded-full p-2"
                />
              </div>
              <div className="text-start">
                <h1 className="text-2xl font-semibold text-slate-800">
                  {data.name}
                </h1>
                <p className="text-base text-slate-600 mt-2">{data.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
