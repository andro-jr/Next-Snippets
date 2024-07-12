"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

export const editSnippet = async (id: number, code: string) => {
  await db.snippet.update({
    where: {
      id,
    },
    data: { code },
  });

  redirect(`/snippets/${id}`);
};
export const deleteSnippet = async (id: number) => {
  await db.snippet.delete({
    where: {
      id,
    },
  });

  redirect(`/`);
};

export const createSnippet = async (
  formState: { message: string },
  formData: FormData
) => {
  return {
    message: "Title must be longer",
  };

  ("use server");
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  const snippet = await db.snippet.create({
    data: {
      title,
      code,
    },
  });

  redirect("/");
};
