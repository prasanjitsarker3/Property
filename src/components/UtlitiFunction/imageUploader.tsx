"use client";

import React, { useState } from "react";
import { Button } from "@nextui-org/react";
type IProps = {
  selectedFile: any;
  setSelectedFile: any;
};

const ImageUploader = ({ selectedFile, setSelectedFile }: IProps) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md">
      <input
        type="file"
        id="file"
        className="hidden"
        onChange={handleFileChange}
      />
      <label htmlFor="file" className="cursor-pointer">
        <Button as="span" fullWidth={true}>
          Choose File
        </Button>
      </label>
      {selectedFile && (
        <p className="mt-2 text-sm text-gray-600">
          Selected file: {selectedFile.name}
        </p>
      )}
    </div>
  );
};

export default ImageUploader;
