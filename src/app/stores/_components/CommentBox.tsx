"use client";

import { Comment } from "@/app/page";
import useEditCommentStore from "@/hooks/useCommentEditStore";
import useDeleteComment from "@/hooks/useDeleteComment";
import usePopupStore from "@/hooks/usePopupStore";
import Image from "next/image";
import React from "react";
import { LuUser2 } from "react-icons/lu";
import CommentInput from "./CommentInput";

const CommentBox = ({ comment, idx }: { comment: Comment; idx: number }) => {
  const { handleDeleteComment } = useDeleteComment(comment);
  const { isPopup, setIsPopup } = usePopupStore();
  const { setIsEdit } = useEditCommentStore();

  return (
    <li className="px-2 py-3 relative md:px-3 md:py-4">
      <div className="flex gap-4">
        {comment.user.image ? (
          <div className="w-[30px] h-[30px]">
            <Image src={comment.user.image} width={100} height={100} alt="profile image" className="rounded-full" />
          </div>
        ) : (
          <div className="w-[35px] h-[35px] border bg-gray-400 rounded-full flex items-center justify-center">
            <LuUser2 className="w-[30px] h-[30px]" />
          </div>
        )}
        <div className="w-full">
          <h1 className="font-bold text-[14px] md:text-base">{comment.user.email}</h1>
          <CommentInput comment={comment} idx={idx} />
        </div>
      </div>
      <div className="absolute top-[16px] right-[12px]">
        <div
          className="relative flex gap-[2px] flex-col cursor-pointer z-50"
          onClick={(e) => {
            e.stopPropagation();
            setIsPopup(idx);
          }}
        >
          <span className="inline-block w-[4px] h-[4px] bg-black rounded-full" />
          <span className="inline-block w-[4px] h-[4px] bg-black rounded-full" />
          <span className="inline-block w-[4px] h-[4px] bg-black rounded-full" />
          {isPopup === idx && (
            <div className=" bg-white w-[70px] text-black absolute right-0 border rounded top-5 flex flex-col items-center gap-2 ">
              <button className="block hover:bg-slate-400 w-full py-1" onClick={() => setIsEdit(idx)}>
                수정
              </button>
              <button className="block  hover:bg-slate-400 w-full py-1" onClick={handleDeleteComment}>
                삭제
              </button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default CommentBox;
