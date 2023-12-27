import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

const useEditComment = (storeId?: number) => {
  const [content, setContent] = useState("");
  const session = useSession();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({});

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

    mutate();
  };

  return { content, onChangeContent, onSumbitComment };
};

export default useEditComment;
