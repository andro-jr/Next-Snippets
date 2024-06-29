import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";

interface SnippetDetailsProp {
  params: {
    id: string;
  };
}

const SnippetDetails = async ({ params }: SnippetDetailsProp) => {
  const id = parseInt(params.id);

  await new Promise((r) => setTimeout(r, 5000));

  const snippet = await db.snippet.findFirst({
    where: {
      id,
    },
  });
  if (!snippet) return notFound();

  return <div>{snippet.title}</div>;
};

export default SnippetDetails;
