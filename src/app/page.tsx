import { db } from "@/db";
import React from "react";

const Home = async () => {
  const snippets = await db.snippet.findMany();
  console.log("snippets :", snippets);

  const renderedSnippets = snippets.map((snippet) => {
    return <div key={snippet.id}>{snippet.title}</div>;
  });

  return <div>{renderedSnippets}</div>;
};

export default Home;
