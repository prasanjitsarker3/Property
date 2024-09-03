"use client";
import { useGetContactQuery } from "@/components/Redux/BannerApi/profileApi";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React from "react";
const columns = [
  { name: "NAME", uid: "name" },
  { name: "Email", uid: "email" },
  { name: "Message", uid: "message" },
];

const ContactPage = () => {
  const { data, isLoading } = useGetContactQuery({});
  if (isLoading) {
    <h1>Loading...</h1>;
  }
  const contactData = data?.data;
  const renderCell = (contactData: any, columnKey: React.Key) => {
    const cellValue = contactData[columnKey as any];
    switch (columnKey) {
      case "name":
        return <h1>{contactData?.name}</h1>;
      case "email":
        return <h1>{contactData?.email}</h1>;
      case "message":
        return <h1>{contactData?.message}</h1>;
      default:
        return cellValue;
    }
  };
  return (
    <div>
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
              {contactData &&
                contactData.map((item: any) => (
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
  );
};

export default ContactPage;
