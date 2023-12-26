"use client";
import setCommentData from "@/app/lib/setCommentData";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

export interface CommentDataObject {
  userId: number;
  storeId: number;
  content: string;
}

const useComment = (storeId?: number) => {
  const { mutate } = useMutation({
    mutationKey: ["store", storeId?.toString()],
    mutationFn: (data: CommentDataObject) => setCommentData(data),
    onSuccess: (data) => {
      console.log(data, "onSuccess");
    },
    onError: (data) => {
      console.log(data);
    },
  });
  const [content, setContent] = useState("");
  const session = useSession();
  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setContent(value);
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

    mutate(commentDataObject);
  };

  return { content, onChangeContent, onSumbitComment };
};

export default useComment;
