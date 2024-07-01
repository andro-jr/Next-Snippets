import { db } from "@/db";
import Link from "next/link";
import React from "react";

const Home = async () => {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => (
    <Link
      href={`/snippets/${snippet.id}`}
      className="flex text-xl mb-2 bg-black bg-opacity-40 rounded-lg p-5 shadow-lg"
    >
      <div key={snippet.id} className="flex">
        <div>{snippet.title}</div>
      </div>
    </Link>
  ));

  return (
    <>
      <div className="container mx-auto text-center px-4 flex w-full justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-white">Code Snippets</h1>
        <div>
          <Link
            href="/snippets/new"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
          >
            New
          </Link>
        </div>
      </div>

      <div className="container mx-auto text-center px-4">
        {renderedSnippets}
      </div>
    </>
  );
};

export default Home;
