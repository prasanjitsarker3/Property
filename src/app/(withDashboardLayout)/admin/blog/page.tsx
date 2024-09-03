"use client";
import {
  useCreateBlogMutation,
  useDeleteBlogMutation,
  useGetBlogQuery,
} from "@/components/Redux/BannerApi/profileApi";
import { imgUrlCreate } from "@/components/UtlitiFunction/createImageUrl";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Tooltip,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { DeleteIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";

const columns = [
  { name: "Image", uid: "image" },
  { name: "Title", uid: "title" },
  { name: "Heading", uid: "heading" },
  { name: "Link", uid: "link" },
  { name: "Actions", uid: "actions" },
];

const BlogPage = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { register, handleSubmit, reset } = useForm();
  const [createBlog] = useCreateBlogMutation();
  const { data, isLoading } = useGetBlogQuery({});
  const [deleteBlog] = useDeleteBlogMutation();
  if (isLoading) {
    <h1>Loading...</h1>;
  }

  const onSubmit = async (data: any) => {
    let img = data.image;
    if (data.image && data.image.length > 0) {
      img = await imgUrlCreate(data.image[0]);
    }
    const postData = {
      title: data.title,
      heading: data.heading,
      image: img,
      link: data.link,
      details: data.details,
    };
    const res = await createBlog(postData);
    console.log(res);
    reset();
    //@ts-ignore
    onOpenChange(false);
  };

  const blogData = data?.data;

  const handleDeleteClick = async (blog: any) => {
    const res = await deleteBlog(blog._id);
    console.log(res);
  };

  const renderCell = (blogData: any, columnKey: React.Key) => {
    const cellValue = blogData[columnKey as any];
    switch (columnKey) {
      case "image":
        return (
          <Image
            src={blogData.image}
            alt={blogData.title}
            width={50}
            height={50}
            className="rounded-full"
          />
        );
      case "title":
        return <h1>{blogData?.title}</h1>;
      case "heading":
        return <h1>{blogData?.heading}</h1>;
      case "link":
        return <h1>{blogData?.link}</h1>;
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Delete item">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => handleDeleteClick(blogData)}
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
    <div className="p-10">
      <Button onPress={onOpen}>Create Blog</Button>
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
              {blogData &&
                blogData.map((item: any) => (
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
                Modal Title
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
                      heading:
                      <input
                        type="text"
                        {...register("heading")}
                        className="w-full p-2 border rounded"
                      />
                    </label>
                    <label>
                      Image URL:
                      <input
                        type="file"
                        {...register("image")}
                        className="w-full p-2 border rounded"
                      />
                    </label>
                    <label>
                      link:
                      <input
                        type="text"
                        {...register("link")}
                        className="w-full p-2 border rounded"
                      />
                    </label>
                    <label>
                      Details:
                      <input
                        type="text"
                        {...register("details")}
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
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default BlogPage;
