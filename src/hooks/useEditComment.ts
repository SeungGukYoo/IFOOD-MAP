import setCommentData from "@/app/_lib/setCommentData";
import { Comment } from "@/app/page";
import React, { useState } from "react";
import useCommentEditStore from "./useCommentEditStore";
import useCommentMutation from "./useCommentMutation";

const useEditComment = (comment: Comment) => {
  const { isEdit, setIsEdit } = useCommentEditStore();
  const [content, setContent] = useState(comment.content);

  const submitEditCommentData = useCommentMutation(
    (data) => {
      return setCommentData(content, comment.id);
    },
    ["store", comment.storeId.toString()]
  );
  const onSuccessCallback = () => {
    setIsEdit(-1);
  };
  const submitEditComment = () => {
    submitEditCommentData.mutate({ content, id: comment.id }, { onSuccess: onSuccessCallback });
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement> & React.KeyboardEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setContent(value);
  };

  return { content, onChangeContent, isEdit, setIsEdit, submitEditComment };
};

export default useEditComment;
