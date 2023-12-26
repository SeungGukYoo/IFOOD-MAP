import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[1024px] mx-auto mt-5 px-3">
      <h2 className="text-base font-semibold leading-7 text-gray-900 md:text-xl">나의 정보</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600 md:text-base">개인정보 및 나의 활동을 확인하세요</p>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default layout;
