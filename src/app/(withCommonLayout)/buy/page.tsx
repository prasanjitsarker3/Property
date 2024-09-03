import BuySearch from "@/components/FrontPage/BuyPage/BuySearch";
import BuyService from "@/components/FrontPage/BuyPage/BuyService";
import ListedProperties from "@/components/FrontPage/BuyPage/ListedProperties";
import PopularProperties from "@/components/FrontPage/BuyPage/PopularProperties";
import Testimonial from "@/components/FrontPage/BuyPage/Testmonial";
import Footer from "@/components/FrontPage/Home/Footer";
import Image from "next/image";
import React from "react";

const BuyPage = () => {
  return (
    <div>
      <div className=" relative">
        <div className="h-[50vh] w-full relative">
          <Image
            src={
              "https://img.freepik.com/free-photo/photorealistic-wooden-house-with-timber-structure_23-2151302660.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_hybrid"
            }
            alt="Wooden house"
            layout="fill"
          />
        </div>
        <div className=" absolute top-3/4 w-full">
          <BuySearch />
          <BuyService />
          <PopularProperties />
          <ListedProperties />
          <Testimonial />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default BuyPage;
