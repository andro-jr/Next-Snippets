"use client";

import * as actions from "@/actions";
import React from "react";
import { useFormState } from "react-dom";

const CreateSnippet = () => {
  const [formState, action] = useFormState(actions.createSnippet, {
    message: "",
  });

  return (
    <form
      action={action}
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
        {formState.message && (
          <div className="text-red-600">{formState.message}</div>
        )}
        <button className="self-end px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300">
          Create
        </button>
      </div>
    </form>
  );
};

export default CreateSnippet;
