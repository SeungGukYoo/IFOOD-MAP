import { Comment } from "@/app/page";
import useEditComment from "@/hooks/useEditComment";
import usePopupControl from "@/hooks/usePopupControl";
import usePopupStore from "@/hooks/usePopupStore";
import React from "react";

const CommentInput = ({ comment, idx }: { comment: Comment; idx: number }) => {
  const { content, onChangeContent, isEdit, setIsEdit, submitEditComment } = useEditComment(comment);
  const { setIsPopup } = usePopupStore();

  usePopupControl(idx, isEdit, setIsPopup);

  return (
    <>
      {isEdit === idx ? (
        <div className="w-full relative mb-2">
          <div className="w-full relative">
            <textarea
              rows={6}
              className="p-2 test-[16px] w-full leading-5 lg:leading-none border resize-none mt-3 rounded outline-none shadow"
              onChange={onChangeContent}
              defaultValue={content}
            />

            <div className="flex gap-4 justify-end mt-1">
              <button
                className="px-4 py-1 rounded-2xl right-2 bg-gray-400 text-white md:bottom-[7px] shadow"
                onClick={() => submitEditComment()}
              >
                수정
              </button>
              <button
                className=" px-4 py-1 rounded-2xl right-2 bg-gray-400 text-white md:bottom-[7px] shadow"
                onClick={() => setIsEdit(-1)}
              >
                취소
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <p className="test-[16px] leading-5 lg:leading-none">{comment.content}</p>
          <span className="text-gray-400 text-sm">{comment.createdAt.split("T")[0]}</span>
        </>
      )}
    </>
  );
};

export default CommentInput;
