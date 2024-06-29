import React from "react";

const SnippetLoading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20 mb-4"></div>
      </div>
    </div>
  );
};

export default SnippetLoading;
