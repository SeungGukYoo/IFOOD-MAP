import { CommentDataObject } from "@/hooks/useComment";
import React from "react";

const setCommentData = async (data: CommentDataObject) => {
  try {
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({ data }),
      cache: "no-store",
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default setCommentData;
