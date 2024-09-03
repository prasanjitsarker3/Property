"use client";
import {
  useGetBannerQuery,
  useUpdateBannerMutation,
} from "@/components/Redux/BannerApi/bannerApi";
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
import { EditIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const columns = [
  { name: "Image", uid: "image" },
  { name: "NAME", uid: "name" },
  { name: "Title", uid: "title" },
  { name: "Heading", uid: "heading" },
  { name: "Resume", uid: "resumeLink" },
  { name: "Actions", uid: "actions" },
];

const BannerPage = () => {
  const { data, isLoading } = useGetBannerQuery({});
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedBanner, setSelectedBanner] = useState<any>(null);
  console.log(selectedBanner);
  const [updateBanner] = useUpdateBannerMutation();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      name: "",
      heading: "",
      resumeLink: "",
    },
  });

  const handleEditClick = (banner: any) => {
    setSelectedBanner(banner);
    reset({
      title: banner.title,
      name: banner.name,
      heading: banner.heading,
      resumeLink: banner.resumeLink,
    });
    onOpen();
  };

  const onSubmit = async (data: any) => {
    const updateData = {
      id: selectedBanner._id,
      item: data,
    };
    const res = await updateBanner(updateData);
    //@ts-expect-error
    onOpenChange(false); // Close modal after submitting
  };

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  const bannerData = data?.data;

  const renderCell = (bannerData: any, columnKey: React.Key) => {
    const cellValue = bannerData[columnKey as any];
    switch (columnKey) {
      case "image":
        return (
          <Image
            src={
              "https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?t=st=1719944377~exp=1719947977~hmac=6e3c92e8710ceebeae0319c10f9b19849019ba769e4aec049a28db6a8c319435&w=826"
            }
            alt={bannerData.name}
            width={50}
            height={50}
            className="rounded-full"
          />
        );
      case "name":
        return <h1>{bannerData?.name}</h1>;
      case "title":
        return <h1>{bannerData?.title}</h1>;
      case "resumeLink":
        return (
          <a href={cellValue} target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Edit item">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => handleEditClick(bannerData)}
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
            {bannerData &&
              bannerData.map((item: any) => (
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
                Edit Banner
              </ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col gap-4">
                    <label>
                      Title:
                      <input
                        type="text"
                        {...register("title")}
                        className="w-full p-2 border rounded"
                      />
                    </label>
                    <label>
                      Name:
                      <input
                        type="text"
                        {...register("name")}
                        className="w-full p-2 border rounded"
                      />
                    </label>
                    <label>
                      Heading:
                      <input
                        type="text"
                        {...register("heading")}
                        className="w-full p-2 border rounded"
                      />
                    </label>
                    <label>
                      Resume Link:
                      <input
                        type="text"
                        {...register("resumeLink")}
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

export default BannerPage;
