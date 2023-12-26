"use client";

import React from "react";
import { LuUser2 } from "react-icons/lu";

const CommentList = () => {
  return (
    <div className="mt-4 px-4">
      <div className="w-full relative mb-2">
        <input
          name="comment"
          placeholder="댓글을 남겨보세요"
          className="w-full border outline-none rounded py-2 pl-2 pr-20 md:py-2 md:text-lg"
        />
        <button className=" px-4 py-1 rounded-2xl absolute right-2 top-[5px] bg-gray-400 text-white md:top-[7px]">
          등록
        </button>
      </div>
      <ul className="divide-y-2 divide-gray-100">
        {[...new Array(8)].map((el, idx) => {
          return (
            <li key={idx} className="px-2 py-3 flex gap-3 md:px-3 md:py-4">
              <div className="w-[35px] h-[35px] border bg-gray-400 rounded-full flex items-center justify-center">
                <LuUser2 className="w-[30px] h-[30px]" />
              </div>

              <div className="">
                <h1 className="font-bold text-[14px] md:text-base">{idx}가 나야</h1>
                <p className="test-[16px] leading-5 lg:leading-none">{idx}가 댓글을 작성하였습니다.</p>
                <span className="text-gray-400 text-sm">{Date.now() + idx}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CommentList;
