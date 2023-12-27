"use client";
import setCommentData from "@/app/lib/setCommentData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

export interface CommentDataObject {
  userId: number;
  storeId: number;
  content: string;
}

const useComment = (storeId?: number) => {
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["store", storeId?.toString()],
    mutationFn: (data: CommentDataObject) => setCommentData(data),
    onSuccess: (data) => {
      if (data?.ok) {
        queryClient.invalidateQueries({ queryKey: ["store", storeId?.toString()] });
        setContent("");
      }
    },
  });

  const session = useSession();
  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement> & React.KeyboardEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setContent(value);
    if (e.code === "Enter") {
      onSumbitComment();
    }
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
