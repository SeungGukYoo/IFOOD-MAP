import setCommentData, { CommentDataType } from "@/app/lib/setCommentData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface UseCommentMutation {
  commentData: CommentDataType;
  commentId?: number;
}

const useCommentMutation = (storeId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["store", storeId.toString()],
    mutationFn: async ({ commentData, commentId }: UseCommentMutation) => {
      let response;
      if (commentId) {
        response = await setCommentData(commentData, commentId);
      } else {
        response = await setCommentData(commentData);
      }
      return response;
    },
    onSuccess: (data) => {
      if (data?.ok) {
        queryClient.invalidateQueries({ queryKey: ["store", storeId.toString()] });
      []}
    },
  });
};

export default useCommentMutation;
