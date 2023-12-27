import { CommentDataObject } from "@/hooks/useAddComment";
import React from "react";

const setCommentData = async (data: CommentDataObject, commentId?: number) => {
  try {
    if (commentId) {
      // const response = await fetch("/api/comment", {
      //   method: "PUT",
      //   body: JSON.stringify({ data, id: commentId }),
      //   cache: "no-store",
      // });
      // return response
    } else {
      const response = await fetch("/api/comment", {
        method: "POST",
        body: JSON.stringify({ data }),
        cache: "no-store",
      });

      return response;
    }
  } catch (error) {
    console.log(error);
  }
};

export default setCommentData;
