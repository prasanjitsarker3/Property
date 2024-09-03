"use client";
import {
  useDeleteTechMutation,
  useGetTechnologyQuery,
  useUpdateTechnologyMutation,
} from "@/components/Redux/BannerApi/technologyApi";
import { imgUrlCreate } from "@/components/UtlitiFunction/createImageUrl";
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
  { name: "Level", uid: "level" },
  { name: "Icon", uid: "icon" },
  { name: "Actions", uid: "actions" },
];

const TechnologyPage = () => {
  const { data, isLoading } = useGetTechnologyQuery({});
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedTech, setSelectedTech] = useState<any>(null);
  const [updateTech] = useUpdateTechnologyMutation();
  const [deleteTech] = useDeleteTechMutation();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      level: "",
      icon: "",
    },
  });

  const handleEditClick = (tech: any) => {
    setSelectedTech(tech);
    reset({
      name: tech.name,
      level: tech.level,
      icon: tech.icon,
    });
    onOpen();
  };

  const onSubmit = async (data: any) => {
    let img = data.icon;
    if (data.icon && data.icon.length > 0) {
      img = await imgUrlCreate(data.icon[0]);
    }
    const updateData = {
      name: data.name,
      level: data.level,
      icon: img,
    };
    const newData = {
      id: selectedTech._id,
      item: updateData,
    };
    const res = await updateTech(newData);
    console.log(res);

    //@ts-ignore
    onOpenChange(false);
  };

  const handleDeleteClick = async (techData: any) => {
    const res = await deleteTech(techData._id);
    console.log(res);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const techData = data?.data;

  const renderCell = (techData: any, columnKey: React.Key) => {
    const cellValue = techData[columnKey as any];
    switch (columnKey) {
      case "icon":
        return (
          <Image
            src={cellValue}
            alt={techData.name}
            width={50}
            height={50}
            className="rounded-full"
          />
        );
      case "name":
        return <h1>{techData?.name}</h1>;
      case "level":
        return <h1>{techData?.level}</h1>;
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Edit item">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => handleEditClick(techData)}
              >
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip content="Delete item">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => handleDeleteClick(techData)}
              >
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  };

  return (
    <div className="bg-white w-full">
      <div>
        <Link href="/admin/technology/create">
          <Button>Add New Technology</Button>
        </Link>
      </div>
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
              {techData &&
                techData.map((item: any) => (
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
                      Level:
                      <input
                        type="text"
                        {...register("level")}
                        className="w-full p-2 border rounded"
                      />
                    </label>
                    <label>
                      Icon URL:
                      <input
                        type="file"
                        {...register("icon")}
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

export default TechnologyPage;
