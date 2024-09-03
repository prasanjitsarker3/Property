"use client";
import { useSingleProjectQuery } from "@/components/Redux/BannerApi/projectApi";
import { Button, Chip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectDetails = (params: any) => {
  const { data, isLoading } = useSingleProjectQuery(params?.params?.projectId);
  if (isLoading) {
    <h1>Loading...</h1>;
  }
  const projectData = data?.data;
  return (
    <div>
      <div className="md:px-24 px-8 space-y-5 py-12 bg-white dark:bg-slate-800">
        <div className=" grid md:grid-cols-3 w-full gap-5   pt-8">
          {projectData?.allImage.map((item: any, index: any) => (
            <div key={index} className="relative h-64">
              <Image
                className="object-cover w-full h-full"
                src={item} // Assuming `item` has a property `img` containing the image URL
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          ))}
        </div>
        <h1 className=" fontPop text-2xl text-[#009975]  font-medium">
          {projectData?.name}
        </h1>
        <div className="flex flex-wrap gap-2">
          <a href={projectData?.clientCode} target="_blank">
            <Button size="sm" color="primary">
              Client Code
            </Button>
          </a>
          {projectData?.serverCode && (
            <a href={projectData?.serverCode} target="_blank">
              <Button size="sm" color="primary">
                Server Code
              </Button>
            </a>
          )}

          <a href={projectData?.live} target="_blank">
            <Button size="sm" color="primary">
              Live Link
            </Button>
          </a>
        </div>
        <p className=" fontPop text-lg">{projectData?.details}</p>
        <div className="flex flex-wrap gap-3 sm:gap-2 md:gap-3">
          <h1 className="fontPop text-xl font-semibold">Technology: </h1>
          {projectData?.technologies.map((item: any, index: any) => (
            <Chip key={index} color="primary" className="rounded-full">
              {item}
            </Chip>
          ))}
        </div>
        <div>
          <Link href="/">
            <Button className=" w-[130px]" size="sm">
              Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
