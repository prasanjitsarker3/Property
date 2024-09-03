import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className=" flex justify-center items-center w-full h-full">
      <div className=" flex flex-col justify-center items-center">
        <h1 className=" text-center text-3xl text-red-500">
          Oops! Page Not Found
        </h1>

        <Link href="/">
          <Button color="primary">Back Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
