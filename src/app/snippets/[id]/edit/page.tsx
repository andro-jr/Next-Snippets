import React from "react";

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

const SnippetEditPage = ({ params }: SnippetEditPageProps) => {
  const id = parseInt(params.id);
  console.log("id :", id);

  return <div>SnippetEditPage</div>;
};

export default SnippetEditPage;
