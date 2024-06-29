import { db } from "@/db";
import React from "react";

const Home = async () => {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => (
    <div
      key={snippet.id}
      className="bg-black bg-opacity-70 rounded-lg p-5 m-4 shadow-lg"
    >
      <div className="text-xl mb-2">{snippet.title}</div>
    </div>
  ));

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="container mx-auto text-center px-4">
        {renderedSnippets}
      </div>
    </div>
  );
};

export default Home;
