import React from "react";

const LoadingPing = () => {
  return (
    <div className="w-full py-5 my-3 flex gap-5 justify-center items-center">
      <span className="animate-ping opacity-75 w-2 h-2 bg-gray-500 rounded-full" />
      <span className="animate-ping delay-100 opacity-75 w-2 h-2 bg-gray-500 rounded-full" />
      <span className="animate-ping delay-150 opacity-75 w-2 h-2 bg-gray-500 rounded-full" />
    </div>
  );
};

export default LoadingPing;
