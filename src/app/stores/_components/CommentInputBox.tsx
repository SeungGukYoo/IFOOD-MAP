"use client";
import { StoreType } from "@/app/page";
import useAddComment from "@/hooks/useAddComment";

import React from "react";

const CommentInputBox = ({ store }: { store: StoreType }) => {
  const { content, onChangeContent, onSumbitComment } = useAddComment(store?.id);

  return (
    <div className="w-full relative mb-2">
      <input
        onChange={onChangeContent}
        onKeyUp={onChangeContent}
        name="comment"
        placeholder="댓글을 남겨보세요"
        className="w-full border outline-none rounded py-2 pl-2 pr-20 md:py-2 md:text-lg"
        value={content}
      />
      <button
        className=" px-4 py-1 rounded-2xl absolute right-2 top-[5px] bg-gray-400 text-white md:top-[7px]"
        onClick={onSumbitComment}
      >
        등록
      </button>
    </div>
  );
};

export default CommentInputBox;
