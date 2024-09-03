"use client";
import {
  useDeleteProjectMutation,
  useGetProjectQuery,
} from "@/components/Redux/BannerApi/projectApi";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import { DeleteIcon, EditIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const columns = [
  { name: "Image", uid: "image" },
  { name: "Name", uid: "name" },
  { name: "Client Code", uid: "clientCode" },
  { name: "Server Code", uid: "serverCode" },
  { name: "Live Link", uid: "live" },
  { name: "Actions", uid: "actions" },
];

const ProjectPage = () => {
  const { data, isLoading } = useGetProjectQuery({});
  const [deleteProject] = useDeleteProjectMutation();
  if (isLoading) {
    <h1>Loading...</h1>;
  }
  console.log(data?.data);
  const projectData = data?.data;

  const handleDeleteClick = async (projectData: any) => {
    const res = await deleteProject(projectData._id);
    console.log(res);
  };
  const renderCell = (projectData: any, columnKey: React.Key) => {
    const cellValue = projectData[columnKey as any];
    switch (columnKey) {
      case "image":
        return (
          <Image
            src={projectData.image}
            alt={projectData.name}
            width={50}
            height={50}
            className="rounded-full"
          />
        );
      case "name":
        return <h1>{projectData?.name}</h1>;
      case "clientCode":
        return <h1>{projectData?.clientCode}</h1>;
      case "serverCode":
        return <h1>{projectData?.serverCode}</h1>;
      case "live":
        return <h1>{projectData?.live}</h1>;
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Delete item">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => handleDeleteClick(projectData)}
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
    <div className=" text-white bg-white">
      <Link href="/admin/project/create">
        {" "}
        <Button className=" mb-5">Create New Project</Button>
      </Link>
      <div>
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
            {projectData &&
              projectData.map((item: any) => (
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
  );
};

export default ProjectPage;
