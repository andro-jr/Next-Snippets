import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

interface SnippetDetailsProp {
  params: {
    id: string;
  };
}

// SVG icons as React components
const EditIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 mr-2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.862 4.487a2.25 2.25 0 113.182 3.183l-9.5 9.5a2.25 2.25 0 01-1.06.561l-3.248.812a.75.75 0 01-.91-.91l.812-3.248a2.25 2.25 0 01.561-1.06l9.5-9.5z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 12.75v6a2.25 2.25 0 01-2.25 2.25h-12A2.25 2.25 0 013 18.75v-12A2.25 2.25 0 015.25 4.5h6"
    />
  </svg>
);

const DeleteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 mr-2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 6.75l-.832 12.34A2.25 2.25 0 0116.423 21H7.577a2.25 2.25 0 01-2.245-1.91L4.5 6.75m3-1.5h9M10.5 10.5v6m3-6v6m-9-8.25h15"
    />
  </svg>
);

const SnippetDetails: React.FC<SnippetDetailsProp> = async ({ params }) => {
  const id = parseInt(params.id);

  await new Promise((r) => setTimeout(r, 1000));

  const snippet = await db.snippet.findFirst({
    where: {
      id,
    },
  });
  if (!snippet) return notFound();

  return (
    <div className="m-8 p-6 bg-gray-800 rounded-lg shadow-lg w-full">
      <div className="flex justify-between items-center mb-4 gap-4">
        <h1 className="text-3xl font-bold text-white">{snippet.title}</h1>
        <div className="flex gap-1">
          <Link
            href={`/snippets/${id}/edit`}
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md mr-2 transition duration-300 flex items-center"
          >
            <EditIcon />
            Edit
          </Link>
          <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 flex items-center">
            <DeleteIcon />
            Delete
          </button>
        </div>
      </div>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetDetails;
