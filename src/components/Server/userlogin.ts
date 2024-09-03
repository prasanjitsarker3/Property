"use server";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { redirect } from "next/navigation";

export const userLogin = async (formData: FieldValues) => {
  const res = await fetch(
    `https://backend-templeted.vercel.app/dev/v1/users/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );
  const userInfo = await res.json();
  if (userInfo?.data) {
    cookies().set("token", userInfo?.data);
  }
  return userInfo;
};
