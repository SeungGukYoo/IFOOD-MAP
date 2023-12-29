import setCommentData from "@/app/lib/setCommentData";
import { Comment } from "@/app/page";
import useCommentEditStore from "@/hooks/useCommentEditStore";
import useEditComment from "@/hooks/useEditComment";
import usePopupStore from "@/hooks/usePopupStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";

const CommentInput = ({ comment, idx }: { comment: Comment; idx: number }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["store", comment.storeId.toString()],
    mutationFn: () => setCommentData(content, comment.id),
    onSuccess: (data) => {
      if (data?.ok) {
        queryClient.invalidateQueries({ queryKey: ["store", comment.storeId.toString()] });
        setIsEdit(-1);
      }
    },
  });

  const { setIsPopup } = usePopupStore();
  const { isEdit, setIsEdit } = useCommentEditStore();
  const { content, onChangeContent } = useEditComment(comment);
  useEffect(() => {
    if (idx === isEdit) {
      setIsPopup(-1);
    }
  }, [setIsPopup, isEdit, idx]);
  return (
    <>
      {isEdit === idx ? (
        <div className="w-full relative mb-2">
          <div className="w-full relative">
            <textarea
              rows={10}
              className="p-2 test-[16px] w-full leading-5 lg:leading-none border resize-none mt-3 rounded outline-none shadow"
              onChange={onChangeContent}
              defaultValue={content}
            />

            <div className="flex gap-4 justify-end mt-2">
              <button
                className=" px-4 py-1 rounded-2xl right-2 bg-gray-400 text-white md:bottom-[7px] shadow"
                onClick={() => mutate()}
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
