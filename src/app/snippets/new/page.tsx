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
    <form
      action={createSnippet}
      className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg mt-10"
    >
      <h3 className="text-2xl font-bold text-white mb-6">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-white">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="border rounded px-3 py-2 w-full bg-gray-700 text-white"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="code" className="text-white">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded px-3 py-2 w-full bg-gray-700 text-white h-40"
          />
        </div>
        <button className="self-end px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300">
          Create
        </button>
      </div>
    </form>
  );
};

export default CreateSnippet;
