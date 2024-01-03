import LoadingSpiner from "@/app/_components/LoadingSpiner";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center z-100">
      <LoadingSpiner />
    </div>
  );
};

export default Loading;
