import React from "react";

const LoadingCard = () => {
  return (
    <div>
      {[...Array(10)].map((_, idx) => (
        <div className="w-full h-20 mb-5 animate-pulse rounded-md bg-gray-200" key={idx} />
      ))}
    </div>
  );
};

export default LoadingCard;
