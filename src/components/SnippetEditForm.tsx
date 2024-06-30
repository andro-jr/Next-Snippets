"use client";

import type { Snippet } from "@prisma/client";
import React from "react";

import Editor from "@monaco-editor/react";

interface SnippetEditFormProps {
  snippet: Snippet;
}

const SnippetEditForm = ({ snippet }: SnippetEditFormProps) => {
  return (
    <div>
      <Editor
        height="40vh"
        defaultLanguage="javascript"
        theme="vs-dark"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
      />
    </div>
  );
};

export default SnippetEditForm;
