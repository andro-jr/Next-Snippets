import { db } from "@/db";
import { permanentRedirect } from "next/navigation";
import React from "react";

const CreateSnippet = () => {
  const createSnippet = async (formData: FormData) => {
    // This needs to be an serve action
    "use server";
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log("snippet :", snippet);

    permanentRedirect("/");
  };

  return (
    <form action={createSnippet} className="">
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label htmlFor="title" className="w-12">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="border rounded o-2 w-full"
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="code" className="w-12">
            Code
          </label>
          <textarea name="code" className="border rounded o-2 w-full" />
        </div>
        <button className="rounded p-2 bg-blue-200">Create</button>
      </div>
    </form>
  );
};

export default CreateSnippet;
