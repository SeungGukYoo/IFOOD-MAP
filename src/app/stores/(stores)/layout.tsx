import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1024px] mx-auto mt-5 px-3">
      <h2 className="text-base font-semibold leading-7 text-gray-900 md:text-xl">모든 가게 보기</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600 md:text-base">서울의 모든 식당을 확인해보세요!</p>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default layout;
