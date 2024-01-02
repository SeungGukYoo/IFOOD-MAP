"use client";
import setCommentData from "@/app/_lib/setCommentData";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import useCommentMutation from "./useCommentMutation";

export interface CommentDataObject {
  userId: number;
  storeId: number;
  content: string;
}

const useAddComment = (storeId: number) => {
  const [content, setContent] = useState("");
  const session = useSession();
  const submitAddCommentData = useCommentMutation(
    (data) => {
      return setCommentData(data as CommentDataObject);
    },
    ["store", storeId.toString()]
  );

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement> & React.KeyboardEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setContent(value);
    if (e.code === "Enter") {
      onSumbitComment();
    }
  };

  const onSuccessCallback = () => {
    setContent("");
  };

  const onSumbitComment = () => {
    if (!storeId || !session.data?.user.access_token?.sub) {
      return;
    }
    const commentDataObject = {
      userId: parseInt(session.data?.user.access_token?.sub),
      storeId,
      content,
    };
    submitAddCommentData.mutate(commentDataObject, {
      onSuccess: onSuccessCallback,
    });
  };

  return { content, onChangeContent, onSumbitComment };
};

export default useAddComment;
