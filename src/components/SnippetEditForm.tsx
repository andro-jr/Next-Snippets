import type { Snippet } from "@prisma/client";
import React from "react";

interface SnippetEditFormProps {
  snippet: Snippet;
}

const SnippetEditForm = ({ snippet }: SnippetEditFormProps) => {
  return <div>snippetEditForm</div>;
};

export default SnippetEditForm;
