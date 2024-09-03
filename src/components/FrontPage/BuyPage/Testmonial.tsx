"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      img: "https://example.com/image1.jpg",
      name: "John Doe",
      position: "CEO, Company A",
      details:
        "This service exceeded my expectations! Highly recommend to others.",
    },
    {
      id: 2,
      rating: 4,
      img: "https://example.com/image2.jpg",
      name: "Jane Smith",
      position: "CTO, Company B",
      details:
        "Great experience, the team was very professional and efficient.",
    },
    {
      id: 3,
      rating: 5,
      img: "https://example.com/image3.jpg",
      name: "Alice Johnson",
      position: "Manager, Company C",
      details: "Exceptional service with a personal touch. Very satisfied.",
    },
    {
      id: 4,
      rating: 4,
      img: "https://example.com/image4.jpg",
      name: "Bob Brown",
      position: "Director, Company D",
      details: "Good quality and prompt service. Will use again in the future.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length / 2 - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length / 2 - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-2xl font-bold vigaRegular text-slate-800 text-center mb-8">
        Testimonials
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials
          .slice(activeIndex * 2, activeIndex * 2 + 2)
          .map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#ecf5ff] p-6 rounded-lg flex flex-col items-center"
            >
              <div className="flex space-x-1">
                {Array(testimonial.rating)
                  //@ts-ignore
                  .fill()
                  .map((_, i) => (
                    <Star key={i} className="text-yellow-500" />
                  ))}
              </div>
              <p className="text-slate-600 text-center my-4">
                {testimonial.details}
              </p>
              <Image
                src={"https://cdn-icons-png.flaticon.com/128/3135/3135715.png"}
                width={60}
                height={60}
                alt={testimonial.name}
                className="rounded-full object-cover mb-2"
              />
              <h2 className="text-xl font-semibold text-slate-800">
                {testimonial.name}
              </h2>
              <h3 className="text-sm text-slate-600">{testimonial.position}</h3>
            </div>
          ))}
      </div>
      <div className="flex justify-center items-center gap-3 mt-6">
        <div
          onClick={handlePrev}
          className={`cursor-pointer h-4 w-4 rounded-full ${
            activeIndex === 0 ? "bg-[#d95d0f]" : "bg-gray-300"
          }`}
        ></div>
        <div
          onClick={handleNext}
          className={`cursor-pointer h-4 w-4 rounded-full ${
            activeIndex === 1 ? "bg-[#d95d0f]" : "bg-gray-300"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Testimonial;
