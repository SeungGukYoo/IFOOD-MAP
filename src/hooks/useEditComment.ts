import setCommentData from "@/app/lib/setCommentData";
import { Comment } from "@/app/page";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import useCommentEditStore from "./useCommentEditStore";

const useEditComment = (comment: Comment) => {
  const { isEdit, setIsEdit } = useCommentEditStore();
  const queryClient = useQueryClient();
  const [content, setContent] = useState(comment.content);
  const { mutate: submitEditComment } = useMutation({
    mutationKey: ["store", comment.storeId.toString()],
    mutationFn: () => setCommentData(content, comment.id),
    onSuccess: (data) => {
      if (data?.ok) {
        queryClient.invalidateQueries({ queryKey: ["store", comment.storeId.toString()] });
        setIsEdit(-1);
      }
    },
  });
  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement> & React.KeyboardEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setContent(value);
  };

  return { content, onChangeContent, isEdit, setIsEdit, submitEditComment };
};

export default useEditComment;
