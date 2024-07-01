"use client";

import type { Snippet } from "@prisma/client";
import React, { useState } from "react";

import Editor from "@monaco-editor/react";
import * as actions from "@/actions";

interface SnippetEditFormProps {
  snippet: Snippet;
}

const SnippetEditForm = ({ snippet }: SnippetEditFormProps) => {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

  return (
    <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
      <div className="mb-4">
        <Editor
          height="40vh"
          defaultLanguage="javascript"
          theme="vs-dark"
          defaultValue={snippet.code}
          options={{ minimap: { enabled: false } }}
          onChange={handleEditorChange}
        />
      </div>

      <form action={editSnippetAction} className="flex justify-end min-w-11">
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
          Save
        </button>
      </form>
    </div>
  );
};

export default SnippetEditForm;
