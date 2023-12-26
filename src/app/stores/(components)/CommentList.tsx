"use client";

import React from "react";
import { LuUser2 } from "react-icons/lu";

const CommentList = () => {
  return (
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
  );
};

export default CommentList;
