"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Button, Textarea, Select, SelectItem } from "@nextui-org/react";
import ImageUploader from "@/components/UtlitiFunction/imageUploader";
import { imgUrlCreate } from "@/components/UtlitiFunction/createImageUrl";
import { useCreateProjectMutation } from "@/components/Redux/BannerApi/projectApi";
import { Router } from "lucide-react";
import { useRouter } from "next/navigation";

type FormData = {
  name: string;
  title: string;
  image: string;
  clientCode: string;
  serverCode: string;
  live: string;
  details: string;
  technologies: string[] | any;
};

const technologiesOptions = [
  "Node JS",
  "TypeScript",
  "Mongoose",
  "React JS",
  "Redux",
  "React-Hook-Form",
  "Ant Design",
  "Tailwind",
  "JWT",
  "Zod",
];

const CreateProject: React.FC = () => {
  const { handleSubmit, control } = useForm<FormData>();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [createProject] = useCreateProjectMutation();
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    const selectedTechs = data.technologies
      .split(",")
      .map((tech: any) => tech.trim());
    data.technologies = selectedTechs;
    const img = await imgUrlCreate(selectedFile);
    data.image = img;
    const res = await createProject(data);
    router.push("/admin/project");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid md:grid-cols-3 gap-12 p-12 bg-white"
      >
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              fullWidth
              label="Name"
              placeholder="Enter name"
              className="bg-white"
            />
          )}
        />

        <Controller
          name="title"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              fullWidth
              label="Title"
              className="bg-white"
              placeholder="Enter title"
            />
          )}
        />

        <Controller
          name="clientCode"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              fullWidth
              className="bg-white"
              label="Client Code URL"
              placeholder="Enter client code URL"
            />
          )}
        />

        <Controller
          name="serverCode"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              fullWidth
              className="bg-white"
              label="Server Code URL"
              placeholder="Enter server code URL"
            />
          )}
        />

        <Controller
          name="live"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              fullWidth
              className="bg-white"
              label="Live Site URL"
              placeholder="Enter live site URL"
            />
          )}
        />

        <Controller
          name="details"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Textarea
              {...field}
              fullWidth
              className="bg-white"
              label="Details"
              placeholder="Enter details"
            />
          )}
        />

        <Controller
          name="technologies"
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <Select
              {...field}
              selectionMode="multiple"
              fullWidth
              className="bg-white"
              label="Technologies"
              placeholder="Select technologies"
              onChange={(values) => field.onChange(values)}
            >
              {technologiesOptions.map((tech) => (
                <SelectItem key={tech} value={tech}>
                  {tech}
                </SelectItem>
              ))}
            </Select>
          )}
        />
        <ImageUploader
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />
        <Button type="submit" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreateProject;
