"use client";

import type { Snippet } from "@prisma/client";
import React, { useState } from "react";

import Editor from "@monaco-editor/react";
import { editSnippet } from "@/actions";

interface SnippetEditFormProps {
  snippet: Snippet;
}

const SnippetEditForm = ({ snippet }: SnippetEditFormProps) => {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
    editSnippet();
  };

  return (
    <div>
      <Editor
        height="40vh"
        defaultLanguage="javascript"
        theme="vs-dark"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default SnippetEditForm;
