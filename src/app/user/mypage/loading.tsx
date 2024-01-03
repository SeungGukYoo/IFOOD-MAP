import React from "react";

const loading = () => {
  return (
    <div>
      <div className="divide-y-2 divide-gray-100">
        <div className="grid grid-cols-4 py-4">
          <p className="flex items-center font-bold">이름</p>
          <p className="col-span-3 text-lg"></p>
        </div>

        <div className="grid grid-cols-4 py-4">
          <p className="flex items-center font-bold">프로필</p>
          <div className="flex items-center col-span-3">
            <div className="w-[50px] h-[50px] rounded-full bg-gray-500 animate-pulse" />
          </div>
        </div>
        <div className="grid grid-cols-4 py-4">
          <p className="flex items-center font-bold">이메일</p>
          <p className="col-span-3 text-lg"></p>
        </div>
        <div className="grid grid-cols-4 py-4">
          <p className="flex items-center font-bold">설정</p>
        </div>
      </div>
    </div>
  );
};

export default loading;
