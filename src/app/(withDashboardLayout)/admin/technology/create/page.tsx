"use client";
import { useCreateTechnologyMutation } from "@/components/Redux/BannerApi/technologyApi";
import { imgUrlCreate } from "@/components/UtlitiFunction/createImageUrl";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";

const CreateNewTech = () => {
  const { register, handleSubmit } = useForm();
  const [createTech] = useCreateTechnologyMutation();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    let img = data.icon;
    if (data.icon && data.icon.length > 0) {
      img = await imgUrlCreate(data.icon[0]);
    }
    const newData = {
      name: data.name,
      level: data?.level,
      icon: img,
    };
    const res = await createTech(newData);
    router.push("/admin/technology");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded shadow-md">
      <h1 className="text-black text-2xl py-4">Add New Technology</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-800"
          >
            Name:
            <input
              id="name"
              type="text"
              {...register("name", { required: true })}
              className="mt-1 block w-full px-3 py-2 border rounded-md bg-white text-slate-800"
            />
          </label>
        </div>
        <div>
          <label
            htmlFor="level"
            className="block text-sm font-medium  text-slate-800"
          >
            Level:
            <input
              id="level"
              type="text"
              {...register("level", { required: true })}
              className="mt-1 block w-full px-3 py-2 border rounded-md bg-white text-slate-800"
            />
          </label>
        </div>
        <div className=" bg-white">
          <label
            htmlFor="icon"
            className="block text-sm font-medium  text-slate-800"
          >
            Icon File:
            <input
              id="icon"
              type="file"
              {...register("icon", { required: true })}
              className="mt-1 block w-full px-3 py-2 border rounded-md bg-white text-slate-800"
            />
          </label>
        </div>
        <Button color="primary" type="submit">
          Add Technology
        </Button>
      </form>
    </div>
  );
};

export default CreateNewTech;
