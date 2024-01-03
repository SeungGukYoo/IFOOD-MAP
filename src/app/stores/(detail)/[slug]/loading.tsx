import LoadingSpiner from "@/app/_components/LoadingSpiner";
import React from "react";

const loading = () => {
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <LoadingSpiner />
    </div>
  );
};

export default loading;
