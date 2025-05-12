
import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-primary-600 animate-spin"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-4 border-b-4 border-secondary-500 animate-spin animate-pulse opacity-70"></div>
      </div>
      <p className="ml-4 text-xl font-medium text-primary-700">Loading...</p>
    </div>
  );
};

export default Loader;
      