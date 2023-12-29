import { Comment } from "@/app/page";
import React, { useState } from "react";
import useCommentEditStore from "./useCommentEditStore";
import useCommentMutation from "./useCommentMutation";

const useEditComment = (comment: Comment) => {
  const { isEdit, setIsEdit } = useCommentEditStore();
  const [content, setContent] = useState(comment.content);
  const { mutate: submitEditCommentData } = useCommentMutation(comment.storeId);
  const submitEditComment = () => {
    submitEditCommentData(
      { commentData: content, commentId: comment.id },
      {
        onSuccess: onSuccessCallback,
      }
    );
  };

  const onSuccessCallback = () => {
    setIsEdit(-1);
  };
  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement> & React.KeyboardEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setContent(value);
  };

  return { content, onChangeContent, isEdit, setIsEdit, submitEditComment };
};

export default useEditComment;
