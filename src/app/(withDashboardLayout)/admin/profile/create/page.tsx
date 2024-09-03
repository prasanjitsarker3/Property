"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Textarea, Button } from "@nextui-org/react";
import { useCreateProfileMutation } from "@/components/Redux/BannerApi/profileApi";
import { useRouter } from "next/navigation";

type FormData = {
  name: string;
  email: string;
  about: string;
  experience: number;
  projects: number;
  technologies: number;
  commit: number;
};

const CreateProfile = () => {
  const { register, handleSubmit } = useForm();
  const [createProfile] = useCreateProfileMutation();
  const router = useRouter();
  const onSubmit = async (data: any) => {
    const updatedData = {
      ...data,
      experience: Number(data.experience),
      projects: Number(data.projects),
      technologies: Number(data.technologies),
      commit: Number(data.commit),
    };
    const res = await createProfile(updatedData);
    router.push("/admin/profile");
  };
  return (
    <div>
      <h1 className=" text-slate-800">Create profile</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="  grid md:grid-cols-3 gap-8"
      >
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
            Email:
            <input
              id="level"
              type="text"
              {...register("email", { required: true })}
              className="mt-1 block w-full px-3 py-2 border rounded-md bg-white text-slate-800"
            />
          </label>
        </div>
        <div>
          <label
            htmlFor="level"
            className="block text-sm font-medium  text-slate-800"
          >
            About:
            <input
              id="level"
              type="text"
              {...register("about", { required: true })}
              className="mt-1 block w-full px-3 py-2 border rounded-md bg-white text-slate-800"
            />
          </label>
        </div>
        <div>
          <label
            htmlFor="level"
            className="block text-sm font-medium  text-slate-800"
          >
            experience:
            <input
              id="level"
              type="text"
              {...register("experience", { required: true })}
              className="mt-1 block w-full px-3 py-2 border rounded-md bg-white text-slate-800"
            />
          </label>
        </div>
        <div>
          <label
            htmlFor="level"
            className="block text-sm font-medium  text-slate-800"
          >
            technologies:
            <input
              id="level"
              type="text"
              {...register("technologies", { required: true })}
              className="mt-1 block w-full px-3 py-2 border rounded-md bg-white text-slate-800"
            />
          </label>
        </div>
        <div>
          <label
            htmlFor="level"
            className="block text-sm font-medium  text-slate-800"
          >
            projects:
            <input
              id="level"
              type="text"
              {...register("projects", { required: true })}
              className="mt-1 block w-full px-3 py-2 border rounded-md bg-white text-slate-800"
            />
          </label>
        </div>
        <div>
          <label
            htmlFor="level"
            className="block text-sm font-medium  text-slate-800"
          >
            commit:
            <input
              id="level"
              type="text"
              {...register("commit", { required: true })}
              className="mt-1 block w-full px-3 py-2 border rounded-md bg-white text-slate-800"
            />
          </label>
        </div>

        <Button color="primary" type="submit">
          Create Profile
        </Button>
      </form>
    </div>
  );
};

export default CreateProfile;
