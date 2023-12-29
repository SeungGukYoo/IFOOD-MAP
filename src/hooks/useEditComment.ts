import setCommentData from "@/app/lib/setCommentData";
import { Comment } from "@/app/page";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import React, { useState } from "react";

const useEditComment = (comment: Comment) => {
  const [content, setContent] = useState(comment.content);

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement> & React.KeyboardEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setContent(value);
  };

  return { content, onChangeContent };
};

export default useEditComment;
