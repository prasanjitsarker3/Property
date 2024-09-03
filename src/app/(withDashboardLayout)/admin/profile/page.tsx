"use client";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "@/components/Redux/BannerApi/profileApi";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { DeleteIcon, EditIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const columns = [
  { name: "NAME", uid: "name" },
  { name: "Email", uid: "email" },
  { name: "About", uid: "about" },
  { name: "commit", uid: "commit" },
  { name: "projects", uid: "projects" },
  { name: "experience", uid: "experience" },
  { name: "technologies", uid: "technologies" },
  { name: "Actions", uid: "actions" },
];

const ProfilePage = () => {
  const { data, isLoading } = useGetProfileQuery({});
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedTech, setSelectedTech] = useState<any>(null);
  const [updateProfile] = useUpdateProfileMutation();

  if (isLoading) {
    <h1>Loading...</h1>;
  }
  const profileData = data?.data;

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      about: "",
      commit: "",
      projects: "",
      experience: "",
      technologies: "",
    },
  });

  const handleEditClick = (profile: any) => {
    profile;
    setSelectedTech(profile);
    reset({
      name: profile.name,
      email: profile.email,
      about: profile.about,
      commit: profile.commit,
      projects: profile.projects,
      experience: profile.experience,
      technologies: profile.technologies,
    });
    onOpen();
  };
  const onSubmit = async (data: any) => {
    const updatedData = {
      ...data,
      experience: Number(data.experience),
      projects: Number(data.projects),
      technologies: Number(data.technologies),
      commit: Number(data.commit),
    };
    const newData = {
      id: selectedTech._id,
      item: updatedData,
    };
    const res = await updateProfile(newData);
    console.log(res);
    //@ts-ignore
    onOpenChange(false);
  };

  const renderCell = (profileData: any, columnKey: React.Key) => {
    const cellValue = profileData[columnKey as any];
    switch (columnKey) {
      case "name":
        return <h1>{profileData?.name}</h1>;
      case "email":
        return <h1>{profileData?.email}</h1>;
      case "About":
        return <h1>{profileData?.about}</h1>;
      case "commit":
        return <h1>{profileData?.commit}</h1>;
      case "projects":
        return <h1>{profileData?.projects}</h1>;
      case "experience":
        return <h1>{profileData?.experience}</h1>;
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Edit item">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => handleEditClick(profileData)}
              >
                <EditIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  };
  return (
    <div>
      {/* <Link href={"/admin/profile/create"}> */}
      <Button isDisabled={true}>Create profile | Disable</Button>
      {/* </Link> */}
      <div className="  bg-white">
        <div className="p-6 w-full">
          <div className="container mx-auto">
            <Table aria-label="Example table with custom cells">
              <TableHeader columns={columns}>
                {(column) => (
                  <TableColumn
                    key={column.uid}
                    align={column.uid === "actions" ? "center" : "start"}
                  >
                    {column.name}
                  </TableColumn>
                )}
              </TableHeader>
              <TableBody emptyContent={"No Data Found"}>
                {profileData &&
                  profileData.map((item: any) => (
                    <TableRow key={item._id}>
                      {columns.map((column) => (
                        <TableCell key={column.uid} className="w-[25%]">
                          {renderCell(item, column.uid)}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit Technology
              </ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col gap-4">
                    <label>
                      Name:
                      <input
                        type="text"
                        {...register("name")}
                        className="w-full p-2 border rounded"
                      />
                    </label>
                    <label>
                      email:
                      <input
                        type="text"
                        {...register("email")}
                        className="w-full p-2 border rounded"
                      />
                    </label>
                    <label>
                      about:
                      <input
                        type="text"
                        {...register("about")}
                        className="w-full p-2 border rounded"
                      />
                    </label>
                    <label>
                      commit:
                      <input
                        type="text"
                        {...register("commit")}
                        className="w-full p-2 border rounded"
                      />
                    </label>
                    <label>
                      projects:
                      <input
                        type="text"
                        {...register("projects")}
                        className="w-full p-2 border rounded"
                      />
                    </label>
                    <label>
                      experience:
                      <input
                        type="text"
                        {...register("experience")}
                        className="w-full p-2 border rounded"
                      />
                    </label>
                    <label>
                      technologies:
                      <input
                        type="text"
                        {...register("technologies")}
                        className="w-full p-2 border rounded"
                      />
                    </label>
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  type="submit"
                  //@ts-ignore
                  onPress={handleSubmit(onSubmit)}
                >
                  Update
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProfilePage;
