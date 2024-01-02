const deleteCommentData = async (id: string | number) => {
  try {
    const response = await fetch(`/api/comment?id=${id}`, {
      method: "DELETE",
    });
    return response;
  } catch (error) {
    console.error("error deleteCommentData");
  }
};

export default deleteCommentData;
