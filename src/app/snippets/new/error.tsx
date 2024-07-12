"use client";

import React from "react";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const NewSnippetError = ({ error, reset }: ErrorPageProps) => {
  return <div>{error.message}</div>;
};

export default NewSnippetError;
