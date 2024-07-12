import SnippetEditForm from "@/components/SnippetEditForm";
import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

const SnippetEditPage = async ({ params }: SnippetEditPageProps) => {
  const id = parseInt(params.id);

  const snippet = await db.snippet.findFirst({
    where: {
      id,
    },
  });

  if (!snippet) notFound();

  return (
    <div className="max-w-[800px  w-full mx-auto p-6  mt-10">
      <h1 className="text-2xl font-bold text-white mb-6">
        Edit Snippet: {snippet.title}
      </h1>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
};

export default SnippetEditPage;
